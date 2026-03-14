import React from "react";

export default function Addons({ addons, setAddons }) {
    const toggle = (key) => {
        setAddons((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="addons">
            <label>
                <input
                type="checkbox"
                checked={addons.premium}
                onChange={() => toggle("premium")}
                />
                Premium Processing ($2500)
            </label>

            <label>
                <input
                type="checkbox"
                checked={addons.dependent}
                onChange={() => toggle("dependent")}
                />
                Dependent Filing ($500)
            </label>

            <label>
                <input 
                type="checkbox"
                checked={addons.consular}
                onChange={() => toggle("consular")}
                />
                Consular Processing ($800)
            </label>

        </div>
    );
}