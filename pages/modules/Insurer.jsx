import CreatePolicy from '../components/CreatePolicy'
import { useInsurer } from '../hooks/useInsurer';
import Card from '../components/Card';
import { useUserContext } from '../provider/UserProvider';

const Insurer = ({policiesFromMogno}) => {
  const { formVisible, handleToggleForm } = useInsurer();
  const { user } = useUserContext();

  return (
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
  )
}

export default Insurer