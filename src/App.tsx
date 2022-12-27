import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { News, NewsItem } from './pages/'

const router = createBrowserRouter([
	{
		path: '/news',
		element: <News itemsPerPage={5} />
	},
	{
		path: '/news/:id',
		element: <NewsItem />
	}
	// {
	// 	path: '/tariffs',
	// 	element: <News itemsPerPage={3} />
	// },
	// {
	// 	path: '/main',
	// 	element: <News itemsPerPage={3} />
	// }
])

function App() {
	return <RouterProvider router={router} />
}

export default App
