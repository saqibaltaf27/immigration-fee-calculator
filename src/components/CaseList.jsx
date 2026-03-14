// Memoized list to avoid unnecessary re-renders

import React from "react";

const CaseList = React.memo(({ cases, onSelect }) => {
    return (
        <div className="case-list">
            {cases.map((item) => (
                <div 
                key={item.id}
                className="case-card"
                onClick={() => onSelect(item)}
                >
                <h3>{item.name}</h3>
                <p>USCIS Fee: ${item.uscisFee}</p>
                <p>Attorney Fee: ${item.attorneyFee}</p>
                <p>Processing Time: ${item.processingTime}</p>
                </div>
            ))}
        </div>
    );

});

export default CaseList;

