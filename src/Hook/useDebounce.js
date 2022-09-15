import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setdebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setdebouncedValue(value), delay);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
