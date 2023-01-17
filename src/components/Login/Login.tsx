import { Link } from 'react-router-dom'

import styles from './Login.module.scss'

type IFormInputs = {
	username: string
	password: string
	remember: boolean
}

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

const schema = yup
	.object({
		username: yup.string().required(),
		password: yup.string().min(8).required(),
		remember: yup.boolean()
	})
	.required()

const Login = ({ onSetAuthMode }: { onSetAuthMode: () => void }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema)
	})

	const onSubmit = (data: IFormInputs) => {
		reset()

		console.log(data)
	}

	return (
		<div className={styles.login}>
			<div className={styles.container}>
				<h1 className={styles.title}>Авторизация</h1>
				<p className={styles.text}>
					Авторизируйтесь, чтобы начать публиковать свои объявления
				</p>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<label className={styles.label}>
						<input
							{...register('username')}
							className={`${styles.input} ${
								errors.username && styles.inputError
							}`}
							type='text'
							placeholder='Логин'
						/>
						<svg
							className={styles.icon}
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_2831_1302)'>
								<path
									d='M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z'
									fill='#CDCDCD'
								/>
								<path
									d='M18.913 14.536C18.7769 14.1959 18.5955 13.8784 18.3915 13.5836C17.3484 12.0416 15.7384 11.0212 13.9244 10.7718C13.6976 10.7492 13.4482 10.7945 13.2668 10.9305C12.3144 11.6335 11.1806 11.9963 10.0014 11.9963C8.82228 11.9963 7.68851 11.6335 6.73612 10.9305C6.5547 10.7945 6.30526 10.7265 6.07853 10.7718C4.26446 11.0212 2.63183 12.0416 1.61143 13.5836C1.40735 13.8784 1.22592 14.2186 1.0899 14.536C1.02189 14.6721 1.04454 14.8308 1.11256 14.9669C1.29398 15.2843 1.52071 15.6018 1.72479 15.8739C2.04224 16.3048 2.38239 16.6902 2.76789 17.053C3.08534 17.3705 3.44815 17.6653 3.81099 17.9601C5.60236 19.2979 7.75657 20.0009 9.97879 20.0009C12.201 20.0009 14.3552 19.2979 16.1466 17.9601C16.5094 17.688 16.8722 17.3705 17.1897 17.053C17.5525 16.6902 17.9153 16.3047 18.2328 15.8739C18.4595 15.5791 18.6636 15.2843 18.845 14.9669C18.9583 14.8308 18.981 14.672 18.913 14.536Z'
									fill='#CDCDCD'
								/>
							</g>
							<defs>
								<clipPath id='clip0_2831_1302'>
									<rect width='20' height='20' fill='white' />
								</clipPath>
							</defs>
						</svg>
						<svg
							className={`${styles.hidden} ${
								errors.username && styles.errorIcon
							}`}
							width='21'
							height='20'
							viewBox='0 0 21 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.5 0C5 0 0.5 4.5 0.5 10C0.5 15.5 5 20 10.5 20C16 20 20.5 15.5 20.5 10C20.5 4.5 16 0 10.5 0ZM10.5 2C11.6 2 12.4 2.9 12.3 4L11.5 12H9.5L8.7 4C8.6 2.9 9.4 2 10.5 2ZM10.5 18C9.4 18 8.5 17.1 8.5 16C8.5 14.9 9.4 14 10.5 14C11.6 14 12.5 14.9 12.5 16C12.5 17.1 11.6 18 10.5 18Z'
								fill='#EB5757'
							/>
						</svg>
					</label>
					<label className={styles.label}>
						<input
							{...register('password')}
							className={`${styles.input} ${
								errors.password && styles.inputError
							}`}
							type='password'
							placeholder='Пароль'
						/>
						<svg
							className={styles.icon}
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g opacity='0.3' clipPath='url(#clip0_2831_1557)'>
								<path
									d='M15.625 7.5H15V5C15 2.2425 12.7575 0 10 0C7.2425 0 5 2.2425 5 5V7.5H4.375C3.34167 7.5 2.5 8.34083 2.5 9.375V18.125C2.5 19.1592 3.34167 20 4.375 20H15.625C16.6583 20 17.5 19.1592 17.5 18.125V9.375C17.5 8.34083 16.6583 7.5 15.625 7.5ZM6.66667 5C6.66667 3.16167 8.16167 1.66667 10 1.66667C11.8383 1.66667 13.3333 3.16167 13.3333 5V7.5H6.66667V5ZM10.8333 13.935V15.8333C10.8333 16.2933 10.4608 16.6667 10 16.6667C9.53917 16.6667 9.16667 16.2933 9.16667 15.8333V13.935C8.67083 13.6458 8.33333 13.1142 8.33333 12.5C8.33333 11.5808 9.08083 10.8333 10 10.8333C10.9192 10.8333 11.6667 11.5808 11.6667 12.5C11.6667 13.1142 11.3292 13.6458 10.8333 13.935Z'
									fill='#686868'
								/>
							</g>
							<defs>
								<clipPath id='clip0_2831_1557'>
									<rect width='20' height='20' fill='white' />
								</clipPath>
							</defs>
						</svg>
						<svg
							className={`${styles.hidden} ${
								errors.password && styles.errorIcon
							}`}
							width='21'
							height='20'
							viewBox='0 0 21 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.5 0C5 0 0.5 4.5 0.5 10C0.5 15.5 5 20 10.5 20C16 20 20.5 15.5 20.5 10C20.5 4.5 16 0 10.5 0ZM10.5 2C11.6 2 12.4 2.9 12.3 4L11.5 12H9.5L8.7 4C8.6 2.9 9.4 2 10.5 2ZM10.5 18C9.4 18 8.5 17.1 8.5 16C8.5 14.9 9.4 14 10.5 14C11.6 14 12.5 14.9 12.5 16C12.5 17.1 11.6 18 10.5 18Z'
								fill='#EB5757'
							/>
						</svg>
					</label>
					<div className={styles.row}>
						<label
							className={`${styles.label} ${styles.labelCheckbox}`}>
							<input
								{...register('remember')}
								className={styles.checkbox}
								type='checkbox'
							/>
							<div className={styles.slider}></div>
							<span>Запомнить меня</span>
						</label>
						<a className={styles.forget} href='#'>
							Забыли пароль?
						</a>
					</div>
					<button className={styles.button} type='submit'>
						Войти
					</button>
				</form>
				<p className={styles.register}>
					Еще нет аккаунта?{' '}
					<button onClick={onSetAuthMode}>Создайте аккаунт</button>
				</p>
			</div>
		</div>
	)
}

export default Login
