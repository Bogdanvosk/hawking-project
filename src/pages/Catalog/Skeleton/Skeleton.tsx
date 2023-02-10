import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={407}
		height={535}
		viewBox="0 0 407 535"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		style={{border: "1px solid #ecebeb", borderRadius: '10px'}}
	>
		<rect x="0" y="0" rx="10" ry="10" width="406" height="226" />
		<rect x="19" y="246" rx="0" ry="0" width="106" height="24" />
		<rect x="19" y="275" rx="0" ry="0" width="58" height="17" />
		<rect x="212" y="246" rx="18" ry="18" width="87" height="34" />
		<rect x="319" y="246" rx="18" ry="18" width="68" height="34" />
		<rect x="20" y="313" rx="0" ry="0" width="240" height="20" />
		<rect x="20" y="344" rx="0" ry="0" width="103" height="20" />
		<rect x="154" y="344" rx="0" ry="0" width="78" height="20" />
		<rect x="20" y="384" rx="0" ry="0" width="366" height="72" />
		<circle cx="36" cy="501" r="16" />
		<rect x="20" y="470" rx="0" ry="0" width="367" height="2" />
		<rect x="103" y="484" rx="18" ry="18" width="124" height="37" />
		<rect x="279" y="483" rx="18" ry="18" width="110" height="37" />
	</ContentLoader>
)

export default Skeleton
