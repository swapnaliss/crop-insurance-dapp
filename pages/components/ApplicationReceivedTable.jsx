import React from 'react'

const ApplicationReceivedTable = () => {
    return (
        <div className="mx-auto">
            <table className="table-auto text-center">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="px-4 py-2 text-sm">Farmer Id</th>
                        <th className="px-4 py-2 text-sm">Farmer Name</th>
                        <th className="px-4 py-2 text-sm">Policy Name</th>
                        <th className="px-4 py-2 text-sm">Duration</th>
                        <th className="px-4 py-2 text-sm">Premum</th>
                        <th className="px-4 py-2 text-sm">Covered Amount</th>
                        <th className="px-4 py-2 text-sm">Crop Name</th>
                        <th className="px-4 py-2 text-sm">Status</th>
                        <th className="px-4 py-2 text-sm">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <React.Fragment>
                        <tr
                            className={`bg-white cursor-pointer 'bg-gray-200' : ''}`}>
                            <td className="px-4 py-2 text-xs">hhh</td>
                            <td className="px-4 py-2 text-xs">hhh</td>
                            <td className="px-4 py-2 text-xs">hhh</td>
                            <td className="px-4 py-2 text-xs">hhh</td>
                            <td className="px-4 py-2 text-xs">hhh</td>
                            <td className="px-4 py-2 text-xs">hhh</td>
                            <td className="px-4 py-2 text-xs">hhh</td>
                            <td className="px-4 py-2 text-xs">hhh</td>
                            <td className="px-4 py-2 text-xs" onClick={() => handleRowClick(index)}>
                                <span className="text-blue-600 px-5 py-1 rounded-full" >
                                    Approve
                                </span>
                            </td>
                        </tr>
                    </React.Fragment>
                </tbody>
            </table>
        </div>
    )
}

export default ApplicationReceivedTable
