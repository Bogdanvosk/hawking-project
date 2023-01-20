import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import { News, NewsItem, Contacts, Auth, Catalog } from './pages/'

const router = createBrowserRouter([
	{
		path: '/news',
		element: <News itemsPerPage={5} />,
		handle: {
			// you can put whatever you want on a route handle
			// here we use "crumb" and return some elements,
			// this is what we'll render in the breadcrumbs
			// for this route
			crumb: () => <Link to='/news'>news</Link>
		}
	},
	{
		path: '/news/:id',
		element: <NewsItem />,
		handle: {
			// `crumb` is your own abstraction, we decided
			// to make this one a function so we can pass
			// the data from the loader to it so that our
			// breadcrumb is made up of dynamic content
			crumb: (data: any) => <span>{data.threadName}</span>
		}
	},
	{
		path: '/contacts',
		element: <Contacts />
	},
	{
		path: '/auth',
		element: <Auth />
	},
	{
		path: '/catalog',
		element: <Catalog itemsPerPage={6} />
	}
])

function App() {
	return <RouterProvider router={router} />
}

export default App
