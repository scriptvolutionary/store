import { FaCopy } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import { Burger, Button, Container, createStyles, Divider, Drawer, Group, Header, ScrollArea, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const useStyles = createStyles(theme => ({
	link: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,

		[theme.fn.smallerThan('sm')]: {
			height: 42,
			display: 'flex',
			alignItems: 'center',
			width: '100%'
		},

		...theme.fn.hover({
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
		})
	},

	subLink: {
		width: '100%',
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
		borderRadius: theme.radius.md,

		...theme.fn.hover({
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]
		}),

		'&:active': theme.activeStyles
	},

	dropdownFooter: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
		margin: -theme.spacing.md,
		marginTop: theme.spacing.sm,
		padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
		paddingBottom: theme.spacing.xl,
		borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`
	},

	hiddenMobile: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none'
		}
	},

	hiddenDesktop: {
		[theme.fn.largerThan('sm')]: {
			display: 'none'
		}
	}
}))

export const LayoutHeader = () => {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
	const { classes, theme } = useStyles()

	const push = useNavigate()

	return (
		<Container size='xl'>
			<Header withBorder={false} height={60}>
				<Group position='apart' sx={{ height: '100%' }}>
					<Group>
						<FaCopy style={{ fontSize: '1.5rem' }} color='#1C7ED6' />
						<Text fw={700} tt='uppercase' fz='xl'>
							Copy Star
						</Text>
					</Group>
					<Group className={classes.hiddenMobile} sx={{ height: '100%' }} spacing={0}>
						<Link className={classes.link} to='/'>
							О нас
						</Link>
						<Link className={classes.link} to='/catalog'>
							Каталог
						</Link>
						<Link className={classes.link} to='/address'>
							Где нас найти?
						</Link>
					</Group>
					<Group className={classes.hiddenMobile}>
						<Button variant='default' onClick={() => push('/login')}>
							Вход
						</Button>
						<Button onClick={() => push('/register')}>Регистрация</Button>
					</Group>
					<Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
				</Group>
			</Header>
			<Drawer opened={drawerOpened} onClose={closeDrawer} size='100%' padding='md' title='Меню' className={classes.hiddenDesktop} zIndex={1000000}>
				<ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx='-md'>
					<Divider my='sm' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
					<Link className={classes.link} to='/'>
						О нас
					</Link>
					<Link className={classes.link} to='/catalog'>
						Каталог
					</Link>
					<Link className={classes.link} to='/address'>
						Где нас найти?
					</Link>
					<Divider my='sm' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
					<Group position='center' grow pb='xl' px='md'>
						<Button variant='default' onClick={() => push('/login')}>
							Вход
						</Button>
						<Button onClick={() => push('/register')}>Регистрация</Button>
					</Group>
				</ScrollArea>
			</Drawer>
		</Container>
	)
}

export default LayoutHeader
