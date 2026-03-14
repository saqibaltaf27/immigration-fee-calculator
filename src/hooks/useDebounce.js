/**
 * Debounce Hook
 * Delays updating the value until user stops typing.
 * Prevents expensive filtering fom firing every keystroke.
 */

import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 300) {

    const [debouncedValue, setDebouncedValue ] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}
