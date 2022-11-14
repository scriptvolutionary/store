import { Outlet } from 'react-router-dom'

import LayoutHeader from './LayoutHeader'

const links = [
	{ label: 'О нас', link: '/' },
	{ label: 'Каталог', link: '/catalog' },
	{ label: 'Где нас найти?', link: '/address' },
]

export const Layout = () => {
	return (
		<>
			<LayoutHeader links={links} />
			<Outlet />
		</>
	)
}

export default Layout
