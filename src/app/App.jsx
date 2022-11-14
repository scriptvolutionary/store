import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '../components/wrapper'
import { AboutUsPage } from '../views/public'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <AboutUsPage />
			}
		]
	}
])

export const App = () => {
	return <RouterProvider router={router} />
}

export default App
