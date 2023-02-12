import React from 'react'
import { useFarmer } from '../hooks/useFarmer.js';

const Card = ({ policyName, description, period, coveredAmount, premium, isFarmer = false, policy }) => {
    const { cropName, setCropName, handleApplyPolicy, isError, isSuccess } = useFarmer();
    
    return (
        <div className="p-6 bg-white bg-gray-200 m-2 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">{policyName}</h3>
            <p className="text-gray-600 mb-2">
                {description}
            </p>
            <div className="py-3 border-t border-gray-300 text-gray-600 flex">
                <p>Period</p>
                <p className='ml-4'>{period}</p>
            </div>
            <div className="text-gray-600 flex">
                <p>Premium</p>
                <p className='ml-4'>{premium}</p>
            </div>
            <div className="py-2 text-gray-600 flex">
                <p>Covered Amount</p>
                <p className='ml-4'>{coveredAmount}</p>
            </div>
            {isFarmer ?
                <>
                    {policy.isApplied
                        ? (
                            <>
                                {policy.status === "in-review" &&
                                    (
                                        <>
                                            <p className="text-gray-600">Status : In Review</p>
                                        </>
                                    )
                                }
                                {policy.isApproved &&
                                    (
                                        <>
                                            <p className="text-green-600">Status : Approved</p>
                                        </>
                                    )
                                }
                            </>
                        )
                        :
                        <form className="grid lg:grid-cols-2 w-4/2 gap-4"
                            onSubmit={(e) => handleApplyPolicy({ e, policy })}>
                            <div className="input-type">
                                <input type="text"
                                    name="Crop Name"
                                    id="cropName"
                                    value={cropName}
                                    className="border w-full px-5 py-3 focus:outline-none rounded-md"
                                    placeholder="Crop Name"
                                    onChange={(e) => setCropName(e.target.value)}
                                />
                            </div>
                            <button className={`${cropName === '' ? 'bg-indigo-300' : 'bg-indigo-600'} text-white py-2 px-4 rounded-lg`}
                                disabled={cropName === '' ? true : false}>
                                Apply
                            </button>
                        </form>
                    }
                </>
                : null
            }

            {isError ? <p className="text-red-600">Unable to apply policy</p> : null}
            {isSuccess ? <p className="text-green-600">Successfully applied</p> : null}
        </div>
    )
}

export default Card
