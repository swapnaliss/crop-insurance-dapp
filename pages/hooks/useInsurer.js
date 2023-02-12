import React, { useEffect, useState, useCallback } from 'react';
import { getAllPoliciesFromMongo } from '../../database/helper/policy.helper';
import { useQuery } from 'react-query';
import { useFarmer } from './useFarmer';
import { useUserContext } from '../provider/UserProvider';
import { getAllAppliedPoliciesFromMongo } from '../../database/helper/applyPolicy.helper';

export function useInsurer() {
    const [formVisible, setFormVisible] = useState(false);
    const [policiesFromMogno, setPoliciesFromMogno] = useState([]);
    const [policiesToBeApplied, setPoliciesToBeApplied] = useState([]);
    const [applicationsReceived, setApplicationsReceived] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [appliedPolices, setAppliedPolices] = useState([]);
    const { data } = useQuery('policies', getAllPoliciesFromMongo);
    const { data: applicationReceived } = useQuery('AppliedPolicies', getAllAppliedPoliciesFromMongo);
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

    const handleApproveOrRejectPolicy = async (
        e, _id, isApproved
    ) => {
        e.preventDefault();
        if (user) {
            try {
                const response = await fetch(`http://localhost:3000/api/applyPolicy?_id=${_id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        isApproved,
                        status: 'reviewed'
                    })
                });

                console.log(response)
                if (response.ok) {
                    console.log("Approved Successfull")
                    setIsSuccess(true);
                }
                else {
                    console.log("Unable to approve");
                    setIsError(true)
                }
            } catch (error) {
                console.error(error);
                setIsError(true);
            }
        }
    };

    useEffect(() => {
        setApplicationsReceived(applicationReceived)
        getPolicesFromMongo();
        if (isSuccess || isError) {
            const timeoutId = setTimeout(() => {
                setIsSuccess(false);
                setIsError(false);
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [applicationReceived, getPolicesFromMongo, isError, isSuccess])


    return {
        formVisible,
        handleToggleForm,
        policiesFromMogno,
        getPolicesFromMongo,
        policiesToBeApplied,
        appliedPolices,
        applicationsReceived,
        handleApproveOrRejectPolicy,
        isError,
        isSuccess,
    }
}