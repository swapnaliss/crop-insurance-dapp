import React, { useState} from 'react';

export function useCreatePolicy() {
  const [policyName, setPolicyName] = useState('');
  const [period, setPeriod] = useState('');
  const [coveredAmount, setCoveredAmount] = useState('');
  const [premium, setPremium] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

    const handleCreatePolicy = async (e)  => {
        e.preventDefault();
        try {

            const response = await fetch('http://localhost:3000/api/policy', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ policyName, period, coveredAmount, premium, description
               })
            });
            console.log(response)
            if (response.ok) {
              console.log("Login Successful")
              
            }
            else {
              console.log("Not Logged in")
             
            }
      
          } catch (error) {
            console.error(error);
           
          }

    }

    return { handleCreatePolicy,policyName, period, coveredAmount, premium, description , setPolicyName, setPeriod, setCoveredAmount, setPremium, setDescription}
}