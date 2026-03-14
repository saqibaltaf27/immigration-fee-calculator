// Use if you want to generate dummy data

// Run as node generateDataset.js

const fs = require("fs");

const base = {
    uscisFee: 460,
    attorneyFee: 2500,
    processingTime: "3-6 months"
};

let visas = [];

for (let i=1; i<=150; i++) {
    visas.push({
        id: i,
        name: `Visa Case Type ${i}`,
        ...base
    });
}

fs.writeFileSync('public/sample_visas.json', JSON.stringify(visas, null, 2));
