import { TModalProps } from '../../types'

import { Link } from 'react-router-dom'

import styles from './Modal.module.scss'

const Modal = ({ setIsModalOpen, title, text, buttonText }: TModalProps) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modalContainer}>
				<h1 className={styles.modalTitle}>{title}</h1>
				<p className={styles.modalText}>{text}</p>

				<button
					onClick={() => setIsModalOpen(false)}
					className={styles.modalButton}>
					{buttonText}
				</button>
			</div>
		</div>
	)
}

export default Modal
