import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

type PriceProps = {
  priceId: string,
}

export function SubscribeButton({ priceId }: PriceProps) {

  const [session] = useSession();

  async function handleSubscribe() {
    if (!session.user) {
      signIn('github')
      return; // evita que o código continue sendo executado
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message)
    }

  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >

      Subscribe now
    </button>
  )
}