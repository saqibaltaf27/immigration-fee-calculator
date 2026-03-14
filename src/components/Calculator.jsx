import React, {useEffect, useMemo, useState} from "react";
import SearchBar from "./SearchBar";
import CaseList from "./CaseList";
import Addons from "./Addons";
import useDebounce from "../hooks/useDebounce";
import { calculateTotal } from "../utils/feeCalculator";

export default function Calculator() {
    const [cases, setCases] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCase, setSelectedCase] = useState(null);

    const [addons, setAddons] = useState({
        premium: false,
        dependent: false,
        consular: false
    });

    const debouncedSearch = useDebounce(search, 300);

    useEffect(() => {
        fetch('/visas.json')
            .then((res) => res.json())
            .then((data) => setCases(data));
    }, []);

    // Memoized Filter - Runs only when debounced search changes.

    const filteredCases = useMemo(() => {
        return cases.filter((c) => c.name.toLowerCase().includes(debouncedSearch.toLowerCase()));
    }, [cases, debouncedSearch]);

    const total = selectedCase ? calculateTotal(selectedCase, addons) : 0;

    return (
        <div className="calculator">
            <h1>Immigration Fee Calculator</h1>
            <SearchBar value={search} onChange={setSearch} />

            <CaseList cases={filteredCases} onSelect={setSelectedCase} />

            {selectedCase && (
                <div className="summary">
                    <h2>Selected Case</h2>
                    <p>{selectedCase.name}</p>
                    <Addons addons={addons} setAddons={setAddons} />

                    <h3>Total Estimated Cost: ${total}</h3>
                </div>
            )}
        </div>
    );
}

