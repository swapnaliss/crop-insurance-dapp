
import styles from '../styles/Home.module.css'
import Farmer from './modules/Farmer'
import Insurer from './modules/Insurer'
import {useUserContext} from './provider/UserProvider'
export default function Home() {
  const { user } = useUserContext();
  return (
    <div className={styles.container}>
  
    { user?.role === "farmer" ?  <Farmer /> 
    :   user?.role === "insurer" ?<Insurer /> : null
   }
    </div>
  )
}
