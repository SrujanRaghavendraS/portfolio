// hooks/useGithubRepos.ts
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "SrujanRaghavendraS";
const GITHUB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
const GITHUB_GRAPHQL_URL = process.env.GITHUB_GRAPHQL_URL || "https://api.github.com/graphql";

export const useGithubRepos = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!GITHUB_ACCESS_TOKEN) {
      console.error("❌ GitHub Access Token is missing from .env.local");
      setError("GitHub Access Token is missing");
      setLoading(false);
      return;
    }

    const fetchPinnedRepos = async () => {
      try {
        const response = await fetch(GITHUB_GRAPHQL_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `{
              user(login: "${GITHUB_USERNAME}") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      name
                      description
                      url
                      stargazerCount
                      forkCount
                      repositoryTopics(first: 5) {
                        nodes {
                          topic {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }`,
          }),
        });

        const jsonData = await response.json();
        console.log("✅ GitHub API Response:", jsonData);

        if (!jsonData?.data?.user?.pinnedItems?.nodes) {
          console.error("❌ GitHub API error: No user data found", jsonData);
          setError("Failed to load projects.");
        } else {
          setRepos(jsonData.data.user.pinnedItems.nodes);
        }
      } catch (error) {
        console.error("❌ Error fetching GitHub repos:", error);
        setError("An error occurred while fetching projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  return { repos, loading, error };
};
