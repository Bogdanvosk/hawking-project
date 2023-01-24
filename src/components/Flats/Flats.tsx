import { TFlatProps, TViewMode } from '../../types'
import Flat from '../Flat/Flat'

import styles from './Flats.module.scss'

const Flats = ({ flats }: { flats: TFlatProps[] }) => {
	// todo: Убрать
	const viewMode: TViewMode = 'Список'

	return (
		<div
			className={`${styles.cards} ${
				viewMode === 'Список' ? styles.listCards : null
			}`}>
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
