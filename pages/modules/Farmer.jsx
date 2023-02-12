import React, { useState } from 'react';
import Card from '../components/Card';
import { useUserContext } from '../provider/UserProvider';

const Farmer = ({ policiesToBeApplied, appliedPolices }) => {
  const [activeTab, setActiveTab] = useState("not-applied-policies");
  const { user } = useUserContext();

  return (
    <main className='py-5'>
      <div className="tabs ml-6">
        <button
          className={`tab-item py-2 px-4 rounded-md ${activeTab === "not-applied-policies" ? "bg-indigo-500 text-white" : "bg-white text-indigo-500"}`}
          onClick={() => setActiveTab("not-applied-policies")}
        >
          Available Policies
        </button>
        <button
          className={`tab-item py-2 px-4 rounded-md ${activeTab === "applied-policies" ? "bg-indigo-500 text-white" : "bg-white text-indigo-500"}`}
          onClick={() => setActiveTab("applied-policies")}
        >
          Applied Policies
        </button>
      </div>
      {activeTab === "not-applied-policies"
        ?
        <div className="not-applied-policies">
          <div className="flex flex-wrap">
            {policiesToBeApplied && policiesToBeApplied.map((policy, index) => {
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
        :
        <div className="applied-policies">
          <div className="flex flex-wrap">
            {appliedPolices && appliedPolices.map((policy, index) => {
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
      }
    </main>
  )
}

export default Farmer