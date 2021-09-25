import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SigInButton() {
  const userIsLogged = true;

  return userIsLogged ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361"/>
      Benício Rufino
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>

  ) : (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#eba417"/>
      Sign In with Github account
    </button>
  )

}