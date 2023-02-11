
import styles from '../styles/Home.module.css'
import Farmer from './modules/Farmer'
import Insurer from './modules/Insurer'
import { useUserContext } from './provider/UserProvider';
import { useInsurer } from './hooks/useInsurer';
import Card from './components/Card';

export default function Home() {
  const { user } = useUserContext();
  const { policiesFromMogno } = useInsurer();

  return (
    <div className={styles.container}>

      {user?.role === "farmer" ? <Farmer />
        : user?.role === "insurer" ? <Insurer /> : null
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
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
