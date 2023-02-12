import React, { useState } from 'react';
import CreatePolicy from '../components/CreatePolicy'
import { useInsurer } from '../hooks/useInsurer';
import Card from '../components/Card';
import { useUserContext } from '../provider/UserProvider';
import ApplicationReceivedTable from '../components/ApplicationReceivedTable';

const Insurer = ({ policiesFromMogno }) => {
  const { formVisible, handleToggleForm, applicationsReceived } = useInsurer();
  const [activeTab, setActiveTab] = useState("all-policies");
  const { user } = useUserContext();

  return (
    <main className='py-5'>
      <div className="tabs ml-6">
        <button
          className={`tab-item py-2 px-4 rounded-md ${activeTab === "all-policies" ? "bg-indigo-500 text-white" : "bg-white text-indigo-500"}`}
          onClick={() => setActiveTab("all-policies")}
        >
          All Policies
        </button>
        <button
          className={`tab-item py-2 px-4 rounded-md ${activeTab === "application-recived" ? "bg-indigo-500 text-white" : "bg-white text-indigo-500"}`}
          onClick={() => setActiveTab("application-recived")}
        >
          Application Received
        </button>
      </div>

      {activeTab === "all-policies"
        ? (
          <div className="all-policies">
            <div>
              <button className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white"
                onClick={handleToggleForm}
              >
                Create Policy
              </button>
              {
                formVisible
                  ?
                  (
                    <div className="container mx-auto py-5">
                      <CreatePolicy />
                    </div>
                  )
                  : null
              }
            </div>

            <div className="flex flex-wrap">
              {policiesFromMogno && policiesFromMogno.map((policy, index) => {
                return (
                  <div key={index} className="w-full md:w-1/4">
                    <Card
                      policyName={policy.policyName}
                      id={policy._id}
                      description={policy.description}
                      period={policy.period}
                      coveredAmount={policy.coveredAmount}
                      premium={policy.premium}
                      isFarmer={user?.role === "insurer" ? false : true}
                      policy={policy}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        ) :
        (
          <div className="application-recived mt-6">
            <ApplicationReceivedTable applicationsReceived={applicationsReceived}/>
          </div>
        )
      }
    </main >
  )
}

export default Insurer