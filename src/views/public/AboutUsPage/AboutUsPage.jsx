import { Carousel } from '@mantine/carousel'
import { Button, Container, createStyles, Paper, Stack, Text, Title } from '@mantine/core'

const useStyles = createStyles(theme => ({
	card: {
		height: 440,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: 32,
		marginTop: theme.spacing.xs
	},

	category: {
		color: theme.white,
		opacity: 0.7,
		fontWeight: 700,
		textTransform: 'uppercase'
	}
}))

function Card({ image, title, category }) {
	const { classes } = useStyles()

	return (
		<Paper p='xl' radius='sm' sx={{ backgroundImage: `url(${image})` }} className={classes.card}>
			<div>
				<Text className={classes.category} size='sm'>
					{category}
				</Text>
				<Title order={3} className={classes.title}>
					{title}
				</Title>
			</div>
			<Button variant='filled'>Подробнее</Button>
		</Paper>
	)
}

const data = [
	{
		image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Товар 1',
		category: 'Категория 1'
	},
	{
		image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Товар 2',
		category: 'Категория 2'
	},
	{
		image: 'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Товар 3',
		category: 'Категория 3'
	},
	{
		image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Товар 4',
		category: 'Категория 4'
	},
	{
		image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Товар 5',
		category: 'Категория 5'
	}
]

export const AboutUsPage = () => {
	const slides = data.map(item => (
		<Carousel.Slide key={item.title}>
			<Card {...item} />
		</Carousel.Slide>
	))

	return (
		<Container size='xl'>
			<Stack justify='space-between' spacing='md' h='auto'>
				<Stack spacing={0}>
					<h3>Топ 5 товаров</h3>
					<Carousel withIndicators withControls={false} loop slideSize='100%' slideGap='md' align='center'>
						{slides}
					</Carousel>
				</Stack>
				<Stack spacing={0}>
					<h3>Наш девиз</h3>
					<Text>...Девиз</Text>
				</Stack>
			</Stack>
		</Container>
	)
}

export default AboutUsPage
