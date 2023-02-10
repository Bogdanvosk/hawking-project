import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={407}
		height={500}
		viewBox="0 0 407 500"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		style={{border: "1px solid #ecebeb", borderRadius: '10px'}}
	>
		<rect x="0" y="0" rx="10" ry="10" width="406" height="226" />
		<rect x="22" y="314" rx="0" ry="0" width="366" height="85" />
		<rect x="22" y="446" rx="18" ry="18" width="125" height="37" />
		<rect x="22" y="257" rx="0" ry="0" width="366" height="38" />
		<rect x="22" y="425" rx="0" ry="0" width="366" height="2" />
		<rect x="306" y="445" rx="18" ry="18" width="81" height="37" />
	</ContentLoader>
)

export default Skeleton
