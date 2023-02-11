import React from 'react'

const Card = ({ policyName, description, period, coveredAmount, premium }) => {
    return (
        <div className="p-6 bg-white bg-gray-200 m-2 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">{policyName}</h3>
            <p className="text-gray-600 mb-2">
                {description}
            </p>
            <div class="py-3 border-t border-gray-300 text-gray-600 flex">
                <p>Period</p>
                <p className='ml-4'>{period}</p>
            </div>
            <div class="text-gray-600 flex">
                <p>Premium</p>
                <p className='ml-4'>{premium}</p>
            </div>
            <div class="py-2 text-gray-600 flex">
                <p>Covered Amount</p>
                <p className='ml-4'>{coveredAmount}</p>
            </div>
        </div>
    )
}

export default Card
