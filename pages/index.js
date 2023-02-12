
import styles from '../styles/Home.module.css'
import Farmer from './modules/Farmer'
import Insurer from './modules/Insurer'
import { useUserContext } from './provider/UserProvider';
import { useInsurer } from './hooks/useInsurer';
import Card from './components/Card';

export default function Home() {
  const { user } = useUserContext();
  const { policiesFromMogno, policiesToBeApplied, appliedPolices } = useInsurer();

  return (
    <div className={styles.container}>

      {user?.role === "farmer" ? <Farmer policiesToBeApplied={policiesToBeApplied} appliedPolices={appliedPolices}/>
        : user?.role === "insurer" ? <Insurer policiesFromMogno={policiesFromMogno}/> : null
      }

      
    </div>
  )
}
