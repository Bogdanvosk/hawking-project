import { TFlatProps } from '../../types'
import Flat from '../Flat/Flat'

import styles from './Flats.module.scss'

const Flats = ({ flats }: { flats: TFlatProps[] }) => {
	return (
		<div className={styles.cards}>
			{flats &&
				flats.map(flat => {
					return (
						<Flat
							address={flat.address}
							bedroomCount={flat.bedroomCount}
							img={flat.img}
							owner={flat.owner}
							price={flat.price}
							roomsCount={flat.roomsCount}
							stuff={flat.stuff}
							key={flat.id}
						/>
					)
				})}
		</div>
	)
}

export default Flats
