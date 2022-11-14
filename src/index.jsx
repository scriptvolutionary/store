import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MantineProvider } from '@mantine/core'

import App from './app'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<MantineProvider
			theme={{
				colorScheme: 'light',
				fontFamily: '"Noto Sans", sans-serif',
				breakpoints: {
					xs: 320,
					sm: 640,
					md: 860,
					lg: 980,
					xl: 1280
				}
			}}
			withGlobalStyles
			withNormalizeCSS
		>
			<App />
		</MantineProvider>
	</StrictMode>
)
