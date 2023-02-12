import React, { useEffect, useState, useCallback } from 'react';
import { getAllPoliciesFromMongo } from '../../database/helper/policy.helper';
import { useQuery } from 'react-query';
import { useFarmer } from './useFarmer';
import { useUserContext } from '../provider/UserProvider';

export function useInsurer() {
    const [formVisible, setFormVisible] = useState(false);
    const [policiesFromMogno, setPoliciesFromMogno] = useState([]);
    const [policiesToBeApplied, setPoliciesToBeApplied] = useState([]);
    const [appliedPolices, setAppliedPolices] = useState([]);
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

                const notAvailablePolicies = createdPolicies.filter(createdPolicy => {
                    return appliedPolicies?.some(appliedPolicy => appliedPolicy.policyId === createdPolicy._id);
                });

                const policiesWithAppliedData = notAvailablePolicies.map(policy => {
                    const appliedData = appliedPolicies.find(appliedPolicy => appliedPolicy.policyId === policy._id);
                    return {
                        ...policy,
                        isApproved: appliedData.isApproved,
                        isApplied: appliedData.isApplied,
                        cropName: appliedData.cropName,
                        status: appliedData.status
                    };
                });

                setAppliedPolices(policiesWithAppliedData);
                setPoliciesToBeApplied(availablePolicies);
                setPoliciesFromMogno(createdPolicies);
            }
        },
        [data, getAppliedPolices],
    );

    useEffect(() => {
        getPolicesFromMongo();
    }, [getPolicesFromMongo])


    return { formVisible, handleToggleForm, policiesFromMogno, getPolicesFromMongo, policiesToBeApplied, appliedPolices }
}