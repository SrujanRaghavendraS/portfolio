import React from 'react';

type OpenForOpportunitiesProps = {
  cardBgColor: string;
};

const OpenForOpportunities: React.FC<OpenForOpportunitiesProps> = ({ cardBgColor }) => {
  return (
    <div className={`mt-8 p-6 text-center rounded-lg shadow-lg ${cardBgColor}`}>
      <h3 className="font-semibold text-xl mb-2">Open for Opportunities</h3>
      <p className="text-sm mb-4">Actively Looking out for oppourtunities</p>
    </div>
  );
};

export default OpenForOpportunities;
