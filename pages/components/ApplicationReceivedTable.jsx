import React from 'react'
import { useInsurer } from '../hooks/useInsurer';

const ApplicationReceivedTable = ({ applicationsReceived }) => {
    const { handleApproveOrRejectPolicy, isError, isSuccess, } = useInsurer();

    return (
        <div className="mx-auto">
            <table className="table-auto text-center">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="px-4 py-2 text-sm">Farmer Id</th>
                        <th className="px-4 py-2 text-sm">Farmer Name</th>
                        <th className="px-4 py-2 text-sm">Policy Id</th>
                        <th className="px-4 py-2 text-sm">Crop Name</th>
                        <th className="px-4 py-2 text-sm">Status</th>
                        <th className="px-4 py-2 text-sm">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {applicationsReceived && applicationsReceived.map((policy, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr
                                    className={`bg-white cursor-pointer 'bg-gray-200' : ''}`}>
                                    <td className="px-4 py-2 text-xs">{policy.farmerId}</td>
                                    <td className="px-4 py-2 text-xs">Farmer Name</td>
                                    <td className="px-4 py-2 text-xs">{policy.policyId}</td>
                                    <td className="px-4 py-2 text-xs">{policy.cropName}</td>
                                    <td className="px-4 py-2 text-xs">{policy.status}</td>
                                    <td className="px-4 py-2 text-xs" >
                                        {policy.isApproved
                                            ? (
                                                <span className="text-blue-600 px-5 py-1 rounded-full"
                                                    onClick={(e) => handleApproveOrRejectPolicy(e, policy._id, false)}
                                                >
                                                    Reject
                                                </span>
                                            )
                                            : (
                                                <span className="text-blue-600 px-5 py-1 rounded-full"
                                                    onClick={(e) => handleApproveOrRejectPolicy(e, policy._id, true)}
                                                >
                                                    Approve
                                                </span>
                                            )
                                        }
                                        {isSuccess ? <p className="text-green-600">Done</p> : null}
                                        {isError ? <p className="text-red-600">Erro. Try again</p> : null}
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ApplicationReceivedTable
