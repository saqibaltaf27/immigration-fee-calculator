/**
 * Search Input used for real0time filtering. Actual filtering is debounced in parent component.
 */

import React from "react";

export default function SearchBar({ value, onChange }) {
    return(
        <input
        type="text"
        placeholder="Search visa Category..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search" />
    );
}