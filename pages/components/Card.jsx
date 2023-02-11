import React from 'react'

const Card = () => {
    return (
        <div className="p-6 bg-white bg-gray-200 m-2 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2 border-b border-gray-400">Card 1</h3>
            <p className="text-gray-600 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="py-3 border-t border-gray-300 text-gray-600 flex">
                <p>Duration</p>
                <p className='ml-4'>2 days ago</p>
            </div>
            <div class="text-gray-600 flex">
                <p>Premium</p>
                <p className='ml-4'>2 days ago</p>
            </div>
            <div class="py-2 text-gray-600 flex">
                <p>Covered Amount</p>
                <p className='ml-4'>2 days ago</p>
            </div>
        </div>
    )
}

export default Card
