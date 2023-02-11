import React from 'react'
import { useInsurer } from '../hooks/useInsurer';
import Card from '../components/Card';
const Farmer = () => {
  const { policiesFromMogno } = useInsurer();

  return (
    <div>Farmer

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
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Farmer