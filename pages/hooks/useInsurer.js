import React, { useEffect, useState, useCallback } from 'react';

export function useInsurer() {
    const [formVisible, setFormVisible] = useState(false);

    const handleToggleForm = useCallback(
        () => {
            setFormVisible(!formVisible);
        },
        [formVisible],
    )


    return { formVisible, handleToggleForm }
}