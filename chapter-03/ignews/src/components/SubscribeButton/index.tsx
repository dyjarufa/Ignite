import styles from './styles.module.scss';

type PriceProps = {
  priceId: string,
}

export function SubscribeButton({ priceId }: PriceProps){
  return(
    <button
      type="button"
      className={styles.subscribeButton}
    >

      Subscribe now
    </button>
  )
}