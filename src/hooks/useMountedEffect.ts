import React, { useEffect, useRef } from 'react';

export const useMountedEffect = (effect: React.EffectCallback, deps?: React.DependencyList) => {
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current) {
            effect();
        } else {
            mounted.current = true;
        }
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
