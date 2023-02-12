import React, { useEffect, useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import { useUserContext } from '../provider/UserProvider';
import { useRouter } from 'next/router';
import { getAllAppliedPoliciesFromMongo } from '../../database/helper/applyPolicy.helper';

export function useFarmer() {
    const [formVisible, setFormVisible] = useState(false);
    const [cropName, setCropName] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { user } = useUserContext();
    const router = useRouter();
    const { data } = useQuery('AppliedPolicies', getAllAppliedPoliciesFromMongo);

    const getAppliedPolices = useCallback(
        () => {
            if (user && data) {
                const filterAppliedPolicesByFarmer = data.filter((policy) =>
                    policy.farmerId === user._id
                )
                return filterAppliedPolicesByFarmer;
            }
        },
        [data, user],
    );

    const handleToggleForm = useCallback(
        () => {
            setFormVisible(!formVisible);
        },
        [formVisible],
    );

    const handleApplyPolicy = async ({ e, policy, isApproved = false, isApplied = false }) => {
        e.preventDefault();
        if (user) {
            try {
                const response = await fetch('http://localhost:3000/api/applyPolicy', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        farmerId: user._id,
                        policyId: policy._id,
                        cropName,
                        isApproved,
                        isApplied
                    })
                });
                console.log(response)
                if (response.ok) {
                    console.log("Applied Successfull")
                    setIsSuccess(true);
                }
                else {
                    console.log("Unable to apply");
                    setIsError(true)
                }
            } catch (error) {
                console.error(error);
                setIsError(true);
            }
        } else {
            router.push('/Login');
        }
    };

    useEffect(() => {
        if (isSuccess || isError) {
            const timeoutId = setTimeout(() => {
                setIsSuccess(false);
                setIsError(false);
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [isError, isSuccess]);

    return {
        formVisible,
        handleToggleForm,
        cropName,
        setCropName,
        handleApplyPolicy,
        isError,
        isSuccess,
        getAppliedPolices
    }
}