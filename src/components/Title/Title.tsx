import { TTitle } from '../../types'

const Title = ({ children, size }: TTitle) => {
	return <h1 style={{ fontSize: `${size}px` }}>{children}</h1>
}

export default Title
