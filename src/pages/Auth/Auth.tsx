import { useState } from 'react'
import { Login, Register } from '../../components'

const Auth = () => {
	const [authMode, setAuthMode] = useState(false)

	const onSetAuthMode = () => {
		setAuthMode(!authMode)
	}
	return (
		<div>
			{authMode ? <Login onSetAuthMode={onSetAuthMode} /> : <Register onSetAuthMode={onSetAuthMode} />}
		</div>
	)
}

export default Auth
