import { FC } from 'react'
import { LayoutComponents } from './components/layout'
import { HomePageComponent } from './page'

export const App: FC = (): JSX.Element => {
	return (
		<>
			<LayoutComponents>
				<HomePageComponent />
			</LayoutComponents>
		</>
	)
}
