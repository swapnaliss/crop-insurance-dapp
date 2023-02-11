import React, { useEffect, useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import { useUserContext } from '../provider/UserProvider';
import { useRouter } from 'next/router';

export function useFarmer() {
    const [formVisible, setFormVisible] = useState(false);
    const [cropName, setCropName] = useState('');
    const { user } = useUserContext();
    const router = useRouter();


    const handleToggleForm = useCallback(
        () => {
            setFormVisible(!formVisible);
        },
        [formVisible],
    );

    const handleApplyPolicy = (e) => {
        e.preventDefault();
        if (user) {
            console.log('clicked');
        } else {
            router.push('/Login');
        }
    };

    return {
        formVisible,
        handleToggleForm,
        cropName,
        setCropName,
        handleApplyPolicy
    }
}