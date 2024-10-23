// src/site/Components/hooks/useIntersectionObserver.js

import { useState, useEffect, useRef } from 'react';

function useIntersectionObserver(options) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            options
        );

        const elementRef = ref.current;

        if (elementRef) {
            observer.observe(elementRef);
        }

        return () => {
            if (elementRef) {
                observer.unobserve(elementRef);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
}

export default useIntersectionObserver;
