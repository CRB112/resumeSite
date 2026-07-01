import { useState, useEffect } from "react";

export default function useCarousel(length) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent(prev => (prev + 1) % (length - 2));
        }, 3000);

        return () => clearInterval(id);
    }, [length]);

    return current;
}