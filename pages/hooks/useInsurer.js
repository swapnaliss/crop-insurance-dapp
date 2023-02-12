import React, { useEffect, useState, useCallback } from 'react';
import { getAllPoliciesFromMongo } from '../../database/helper/policy.helper';
import { useQuery } from 'react-query';
import { useFarmer } from './useFarmer';
import { useUserContext } from '../provider/UserProvider';

export function useInsurer() {
    const [formVisible, setFormVisible] = useState(false);
    const [policiesFromMogno, setPoliciesFromMogno] = useState([]);
    const { data } = useQuery('policies', getAllPoliciesFromMongo);
    const { getAppliedPolices } = useFarmer();
    const { user } = useUserContext();

    const handleToggleForm = useCallback(
        () => {
            setFormVisible(!formVisible);
        },
        [formVisible],
    );

    const getPolicesFromMongo = useCallback(
        () => {
            if (data) {
                const appliedPolicies = getAppliedPolices();
                const createdPolicies = data;

                const availablePolicies = createdPolicies.filter(createdPolicy => {
                    return !appliedPolicies?.some(appliedPolicy => appliedPolicy.policyId === createdPolicy._id);
                });

                const actualData = user?.role === 'farmer' ? availablePolicies : createdPolicies;

                setPoliciesFromMogno(actualData);
            }
        },
        [data, getAppliedPolices, user?.role],
    );

    useEffect(() => {
        getPolicesFromMongo();
    }, [getPolicesFromMongo])


    return { formVisible, handleToggleForm, policiesFromMogno, getPolicesFromMongo }
}