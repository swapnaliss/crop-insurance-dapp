import React, { useEffect, useState, useCallback } from 'react';
import { getAllPoliciesFromMongo } from '../../database/helper/policy.helper';
import { useQuery } from 'react-query';

export function useInsurer() {
    const [formVisible, setFormVisible] = useState(false);
    const [policiesFromMogno, setPoliciesFromMogno] = useState([]);
    const { isLoading, isError, data, error } = useQuery('policies', getAllPoliciesFromMongo);

    const handleToggleForm = useCallback(
        () => {
            setFormVisible(!formVisible);
        },
        [formVisible],
    );

    useEffect(() => {
        setPoliciesFromMogno(data);
    }, [data, setPoliciesFromMogno])


    return { formVisible, handleToggleForm, policiesFromMogno }
}