import React from 'react';
import { useCreatePolicy } from '../hooks/useCreatePolicy';

const CreatePolicy = () => {
    const { handleCreatePolicy } = useCreatePolicy();

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleCreatePolicy}>
            <div className="input-type">
                <input type="text" name="Policy Name" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Policy Name" />
            </div>

            <div className="input-type">
                <input type="text" name="Policy Duration" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Policy Duration" />
            </div>

            <div className="input-type">
                <input type="text" name="Premium Amount" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Premium Amount" />
            </div>

            <div className="input-type">
                <input type="text" name="Covered Amount" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Covered Amount" />
            </div>

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Create Policy</button>

        </form>
    )
}

export default CreatePolicy