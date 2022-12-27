import { TCard } from '../../types'
import { Card } from '../'

import styles from './Cards.module.scss'

type TCardsProps = {
	news: TCard[] | undefined
}

const Cards = ({ news }: TCardsProps) => {
	return (
		<div className={styles.cards}>
			{news && news.map(card => {
				return (
					<Card
						id={card.id}
						date={card.date}
						imgSrc={card.imgSrc}
						text={card.text}
						title={card.title}
						key={card.id}
					/>
				)
			})}
		</div>
	)
}

export default Cards
