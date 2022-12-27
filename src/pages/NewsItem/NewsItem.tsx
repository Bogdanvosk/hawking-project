import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumbs, Cards, Container, Layout } from '../../components'
import { TCard } from '../../types'

import styles from './NewsItem.module.scss'

const NewsItem = () => {
	const [newsItem, setNewsItem] = useState<TCard>()
	const [moreNewsItems, setMoreNewsItems] = useState<TCard[]>()
	const { id } = useParams()

	useEffect(() => {
		axios
			.get(`http://localhost:3000/news/${id}`)
			.then(({ data }) => setNewsItem(data))

		axios.get(`http://localhost:3000/news`).then(({ data }) => {
			const filteredNewsItems: TCard[] =
				id && data.filter((item: TCard) => item.id !== +id)

			const randNumber: number = Math.floor(
				Math.random() * (filteredNewsItems.length - 3)
			)

			setMoreNewsItems(
				filteredNewsItems.slice(randNumber, randNumber + 3)
			)
		})
	}, [id])

	const paragraphs = newsItem?.text
		.split('\n')
		.map(text => <p key={`${text}`}>{text}</p>)

	return (
		<Layout>
			<div className={styles.newsItem}>
				<Container>
					<div className={styles.container}>
						<div className={styles.head}>
							<Breadcrumbs />
							<h1 className={styles.title}>{newsItem?.title}</h1>
							<div className={styles.row}>
								<div className={styles.date}>
									14 Января 2008
								</div>
								<div className={styles.socials}>
									<span>Поделиться</span>
									<ul className={styles.socialLinks}>
										<li className={styles.socialItem}>
											<a
												target='_blank'
												href='https://vk.com'>
												<svg
													width='18'
													height='19'
													viewBox='0 0 18 19'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<g clipPath='url(#clip0_2831_892)'>
														<path
															d='M14.7034 10.2305C14.4274 9.88189 14.5064 9.72681 14.7034 9.41522C14.707 9.41167 16.9855 6.26311 17.2203 5.19534L17.2217 5.19463C17.3384 4.8055 17.2217 4.51953 16.6576 4.51953H14.7909C14.3157 4.51953 14.0966 4.76496 13.9793 5.03955C13.9793 5.03955 13.0289 7.31453 11.6844 8.78921C11.2504 9.21533 11.0498 9.35191 10.8129 9.35191C10.6963 9.35191 10.5149 9.21533 10.5149 8.8262V5.19463C10.5149 4.72796 10.3818 4.51953 9.98843 4.51953H7.0533C6.75523 4.51953 6.5781 4.73721 6.5781 4.93995C6.5781 5.38243 7.25035 5.48416 7.32006 6.72907V9.43016C7.32006 10.022 7.21264 10.1309 6.97433 10.1309C6.33979 10.1309 4.79966 7.84664 3.88696 5.23233C3.70271 4.72512 3.52274 4.52024 3.04398 4.52024H1.17662C0.643795 4.52024 0.536377 4.76567 0.536377 5.04026C0.536377 5.52542 1.17092 7.93769 3.48717 11.1247C5.03085 13.3 7.20482 14.4788 9.18245 14.4788C10.3712 14.4788 10.5163 14.217 10.5163 13.7667C10.5163 11.6881 10.4089 11.4917 11.0043 11.4917C11.2803 11.4917 11.7555 11.6283 12.8652 12.6776C14.1336 13.9218 14.3421 14.4788 15.052 14.4788H16.9187C17.4508 14.4788 17.7204 14.217 17.5653 13.7006C17.2103 12.6143 14.8116 10.3798 14.7034 10.2305V10.2305Z'
															fill='#664EF9'
														/>
													</g>
													<defs>
														<clipPath id='clip0_2831_892'>
															<rect
																width='17.073'
																height='17.073'
																fill='white'
																transform='translate(0.536377 0.962891)'
															/>
														</clipPath>
													</defs>
												</svg>
											</a>
										</li>
										<li className={styles.socialItem}>
											<a
												target='_blank'
												href='https://facebook.com'>
												<svg
													width='18'
													height='19'
													viewBox='0 0 18 19'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<g clipPath='url(#clip0_2831_896)'>
														<path
															d='M11.8839 3.79773H13.4426V1.08311C13.1737 1.04612 12.2489 0.962891 11.1718 0.962891C8.92461 0.962891 7.38519 2.3764 7.38519 4.97434V7.36528H4.90533V10.4H7.38519V18.0359H10.4256V10.4007H12.8052L13.1829 7.36599H10.4249V5.27525C10.4256 4.39813 10.6618 3.79773 11.8839 3.79773V3.79773Z'
															fill='#664EF9'
														/>
													</g>
													<defs>
														<clipPath id='clip0_2831_896'>
															<rect
																width='17.073'
																height='17.073'
																fill='white'
																transform='translate(0.504639 0.962891)'
															/>
														</clipPath>
													</defs>
												</svg>
											</a>
										</li>
										<li className={styles.socialItem}>
											<a
												target='_blank'
												href='https://viber.com'>
												<svg
													width='21'
													height='21'
													viewBox='0 0 21 21'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M10.7671 2.47798C9.36991 2.49685 6.36357 2.72621 4.68185 4.26712C3.43344 5.50827 2.99722 7.33806 2.94642 9.60407C2.90287 11.8614 2.85206 16.1001 6.93842 17.2549V19.0114C6.93842 19.0114 6.91084 19.7154 7.37536 19.8606C7.94876 20.0421 8.27538 19.4984 8.81974 18.9178L9.83589 17.771C12.6303 18.0032 14.7715 17.4669 15.0182 17.387C15.5844 17.2056 18.7787 16.7984 19.3013 12.5589C19.8384 8.18146 19.04 5.42335 17.6029 4.17495L17.5956 4.17349C17.1601 3.77429 15.4182 2.50411 11.5205 2.48959C11.5205 2.48959 11.2331 2.47145 10.7671 2.47798ZM10.8157 3.7097C11.2113 3.70752 11.4545 3.72421 11.4545 3.72421C14.7497 3.73147 16.3254 4.72584 16.6956 5.05972C17.9077 6.09691 18.5305 8.58429 18.0747 12.2395C17.6392 15.7815 15.048 16.0065 14.5689 16.1589C14.3657 16.2243 12.4786 16.6888 10.1037 16.5364C10.1037 16.5364 8.33344 18.671 7.78182 19.2226C7.69472 19.317 7.59311 19.346 7.52778 19.3315C7.43343 19.3097 7.40439 19.1936 7.41165 19.0339L7.42617 16.1168C3.96329 15.1588 4.16652 11.5427 4.20281 9.6556C4.24636 7.76847 4.60201 6.22103 5.65445 5.17585C7.07487 3.89115 9.6283 3.71695 10.815 3.7097H10.8157ZM11.077 5.59682C11.0485 5.59673 11.0202 5.60227 10.9938 5.61313C10.9674 5.624 10.9433 5.63997 10.9231 5.66013C10.9029 5.68029 10.8868 5.70425 10.8759 5.73063C10.8649 5.757 10.8593 5.78528 10.8593 5.81384C10.8593 5.87159 10.8822 5.92698 10.9231 5.96781C10.9639 6.00865 11.0193 6.03159 11.077 6.03159C11.6166 6.02129 12.1529 6.11798 12.655 6.31605C13.157 6.51413 13.6149 6.80968 14.0021 7.18564C14.7932 7.95501 15.1786 8.98567 15.1932 10.3357C15.1932 10.3643 15.1988 10.3926 15.2097 10.419C15.2207 10.4454 15.2367 10.4694 15.2569 10.4897C15.2771 10.5099 15.3012 10.5259 15.3276 10.5369C15.354 10.5478 15.3823 10.5534 15.4109 10.5534V10.5469C15.4686 10.5469 15.524 10.524 15.5649 10.4831C15.6057 10.4423 15.6286 10.3869 15.6286 10.3292C15.6556 9.69428 15.553 9.06056 15.3271 8.46659C15.1013 7.87263 14.7569 7.33086 14.3149 6.87426C13.4512 6.03232 12.361 5.59682 11.0763 5.59682H11.077ZM8.20715 6.09764C8.0528 6.07564 7.89553 6.10633 7.76077 6.18474H7.75206C7.45448 6.35893 7.18012 6.57668 6.91882 6.86701C6.72285 7.09927 6.61325 7.3308 6.58422 7.55581C6.56714 7.68777 6.57954 7.82188 6.62051 7.94848L6.63503 7.95573C6.85874 8.61343 7.15066 9.24592 7.50601 9.84286C7.96662 10.6789 8.53254 11.4524 9.18991 12.1444L9.21168 12.1735L9.24072 12.1952L9.26249 12.217L9.28426 12.2388C9.97904 12.8978 10.7546 13.4661 11.5924 13.9299C12.5504 14.4525 13.1326 14.6993 13.4809 14.8009V14.8082C13.5826 14.8372 13.6755 14.8517 13.7698 14.8517C14.0672 14.83 14.3488 14.7094 14.5697 14.5091C14.8527 14.2551 15.0777 13.9735 15.2447 13.6759V13.6687C15.4116 13.3566 15.3536 13.0582 15.114 12.855C14.6313 12.4327 14.1087 12.0584 13.5535 11.7372C13.1834 11.534 12.8059 11.6574 12.6535 11.8606L12.3269 12.2736C12.16 12.4769 11.8551 12.4478 11.8551 12.4478L11.8464 12.4551C9.58185 11.8744 8.97942 9.58157 8.97942 9.58157C8.97942 9.58157 8.95039 9.26947 9.16088 9.10979L9.56733 8.78317C9.7633 8.62349 9.90121 8.24606 9.69072 7.87589C9.37002 7.32045 8.99564 6.79778 8.57296 6.31538C8.48102 6.20135 8.35122 6.12409 8.20715 6.09764ZM11.4537 6.74362C11.396 6.74381 11.3407 6.76694 11.3 6.80791C11.2593 6.84888 11.2365 6.90434 11.2367 6.96209C11.2369 7.01984 11.26 7.07515 11.301 7.11585C11.342 7.15654 11.3974 7.1793 11.4552 7.17911C12.1816 7.19172 12.8733 7.49189 13.3786 8.0138C13.6066 8.26531 13.7819 8.55996 13.8941 8.88034C14.0063 9.20073 14.0531 9.54036 14.0318 9.87915C14.032 9.93678 14.0551 9.99198 14.0959 10.0327C14.1367 10.0733 14.192 10.0962 14.2496 10.0962L14.2568 10.1049C14.2855 10.1049 14.3139 10.0992 14.3403 10.0882C14.3668 10.0773 14.3908 10.0611 14.4111 10.0409C14.4313 10.0206 14.4473 9.99646 14.4582 9.96996C14.4691 9.94346 14.4747 9.91507 14.4746 9.88641C14.4964 9.02269 14.2278 8.29687 13.698 7.71621C13.1681 7.13556 12.4278 6.80894 11.4842 6.74362C11.4741 6.74291 11.4639 6.74291 11.4537 6.74362ZM11.8094 7.91872C11.7803 7.91786 11.7513 7.92275 11.724 7.9331C11.6968 7.94345 11.6719 7.95906 11.6507 7.97904C11.6295 7.99903 11.6124 8.02299 11.6005 8.04956C11.5886 8.07614 11.582 8.1048 11.5811 8.13392C11.5803 8.16304 11.5851 8.19204 11.5955 8.21928C11.6058 8.24651 11.6215 8.27143 11.6414 8.29263C11.6614 8.31382 11.6854 8.33088 11.712 8.34281C11.7385 8.35475 11.7672 8.36133 11.7963 8.36219C12.5149 8.39848 12.8633 8.76139 12.9068 9.50899C12.9087 9.56547 12.9325 9.61901 12.9731 9.65828C13.0137 9.69756 13.0681 9.7195 13.1246 9.71947H13.1318C13.1611 9.71856 13.1898 9.71177 13.2164 9.6995C13.2429 9.68723 13.2668 9.66973 13.2864 9.64805C13.3061 9.62637 13.3211 9.60096 13.3307 9.57332C13.3403 9.54569 13.3443 9.5164 13.3423 9.48721C13.2915 8.51461 12.7617 7.96953 11.8181 7.91872C11.8152 7.91866 11.8123 7.91866 11.8094 7.91872Z'
														fill='#664EF9'
													/>
												</svg>
											</a>
										</li>
										<li className={styles.socialItem}>
											<a
												target='_blank'
												href='https://web.telegram.org/'>
												<svg
													width='20'
													height='21'
													viewBox='0 0 20 21'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M17.2089 3.99741L2.56595 9.644C1.56662 10.0454 1.5724 10.6029 2.3826 10.8515L6.14204 12.0242L14.8403 6.53619C15.2516 6.28594 15.6274 6.42056 15.3185 6.69476L8.27118 13.0549H8.26953L8.27118 13.0557L8.01185 16.9308C8.39176 16.9308 8.55941 16.7565 8.77249 16.5509L10.5985 14.7752L14.3968 17.5808C15.0971 17.9665 15.6001 17.7683 15.7744 16.9325L18.2677 5.18173C18.5229 4.15846 17.8771 3.69513 17.2089 3.99741Z'
														fill='#664EF9'
													/>
												</svg>
											</a>
										</li>
										<li className={styles.socialItem}>
											<a
												target='_blank'
												href='https://www.whatsapp.com'>
												<svg
													width='21'
													height='21'
													viewBox='0 0 21 21'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M16.1558 4.87929C15.3846 4.10244 14.4667 3.48655 13.4555 3.06738C12.4442 2.64821 11.3598 2.43412 10.2651 2.43754C5.67675 2.43754 1.94218 6.17211 1.94218 10.7637C1.94218 12.2308 2.32656 13.6654 3.05436 14.9257L1.87286 19.241L6.28692 18.0826C7.50723 18.7473 8.87449 19.0961 10.2641 19.0971H10.2672C14.8556 19.0971 18.5934 15.3625 18.5934 10.771C18.5961 9.67672 18.3821 8.59273 17.9635 7.58165C17.5449 6.57058 16.9302 5.65246 16.1548 4.88034L16.1558 4.87929ZM10.2672 17.6919C9.0271 17.6921 7.80973 17.3588 6.74272 16.7268L6.48961 16.5755L3.87038 17.2613L4.56982 14.7083L4.40599 14.4457C3.71049 13.3438 3.34295 12.0667 3.34632 10.7637C3.34854 8.92797 4.07897 7.16815 5.37729 5.87042C6.67561 4.57269 8.43576 3.84307 10.2714 3.84168C12.1188 3.84168 13.859 4.56423 15.1644 5.86965C15.8086 6.51152 16.3192 7.2747 16.6668 8.11507C17.0143 8.95544 17.1919 9.85636 17.1892 10.7658C17.1861 14.5854 14.0816 17.6909 10.2672 17.6909V17.6919ZM14.0617 12.507C13.8548 12.402 12.8308 11.9 12.6407 11.8307C12.4506 11.7614 12.312 11.7256 12.1713 11.9357C12.0337 12.1426 11.6336 12.612 11.5117 12.7528C11.3899 12.8903 11.2691 12.9103 11.0623 12.8053C10.8554 12.7002 10.1822 12.4808 9.38821 11.7719C8.77068 11.2205 8.35165 10.5379 8.22982 10.331C8.108 10.1241 8.21617 10.0096 8.32224 9.90773C8.41781 9.81531 8.52914 9.66513 8.63416 9.5433C8.73918 9.42148 8.77174 9.33641 8.84105 9.19568C8.91036 9.0581 8.87676 8.93628 8.82425 8.83125C8.77173 8.72623 8.3548 7.70227 8.18466 7.28534C8.01768 6.87785 7.84334 6.93457 7.71522 6.92721C7.59339 6.92091 7.45581 6.92091 7.31824 6.92091C7.18066 6.92091 6.95381 6.97342 6.76372 7.18032C6.57363 7.38721 6.03487 7.89236 6.03487 8.91632C6.03487 9.94028 6.77947 10.9285 6.8845 11.0693C6.98952 11.2068 8.35165 13.3104 10.4384 14.2105C10.9341 14.4237 11.3217 14.5518 11.6231 14.6505C12.1219 14.808 12.5746 14.7849 12.9327 14.7324C13.3328 14.6736 14.1635 14.2304 14.3379 13.7442C14.5122 13.2579 14.5122 12.842 14.4597 12.7559C14.4103 12.6635 14.2728 12.612 14.0627 12.506L14.0617 12.507Z'
														fill='#664EF9'
													/>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{newsItem && (
							<div className={styles.main}>
								<div className={styles.image}>
									<img
										src={newsItem.imgSrc}
										alt='News Image'
									/>
								</div>
								<div className={styles.text}>{paragraphs}</div>
							</div>
						)}
					</div>
				</Container>
				<div className={styles.more}>
					<Container>
						<h2 className={styles.moreTitle}>Читайте также</h2>
						<div className={styles.moreCards}>
							<Cards news={moreNewsItems} />
						</div>
					</Container>
				</div>
			</div>
		</Layout>
	)
}

export default NewsItem