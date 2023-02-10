import React from 'react';
import {useCreatePolicy} from "../hooks/useCreatePolicy"

const CreatePolicy = () => {
    const { handleCreatePolicy ,policyName, period, coveredAmount, premium, description,
        setPolicyName, setPeriod, setCoveredAmount, setPremium, setDescription} = useCreatePolicy();

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleCreatePolicy}>
            <div className="input-type">
                <input type="text" 
                name="Policy Name" 
                id="policyName"
                value={policyName}
                onChange={(e) => setPolicyName(e.target.value)}
                className="border w-full px-5 py-3 focus:outline-none rounded-md" 
                placeholder="Policy Name" />
            </div>

            <div className="input-type">
                <input type="text" 
                name="Policy Duration" 
                id="period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="border w-full px-5 py-3 focus:outline-none rounded-md" 
                placeholder="Policy Duration" />
            </div>

            <div className="input-type">
                <input type="text" 
                name="Premium Amount" 
                id="premium"
                value={premium}
                onChange={(e) => setPremium(e.target.value)}
                className="border w-full px-5 py-3 focus:outline-none rounded-md" 
                placeholder="Premium Amount" />
            </div>

            <div className="input-type">
                <input type="text" 
                name="Covered Amount" 
                id="period"
                value={coveredAmount}
                onChange={(e) => setCoveredAmount(e.target.value)}
                className="border w-full px-5 py-3 focus:outline-none rounded-md" 
                placeholder="Covered Amount" />
            </div>

            <div className="input-type">
                <input type="text" 
                name="Description" 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border w-full px-5 py-3 focus:outline-none rounded-md" 
                placeholder="Description" />
            </div>
            

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Create Policy</button>

        </form>
    )
}

export default CreatePolicy