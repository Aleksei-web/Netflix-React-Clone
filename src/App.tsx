import { FooterContainer } from './containers/Footer'
import { JumbotronContainer } from './containers/jumbotron'

export const App = (): JSX.Element => {
	return (
		<>
			<JumbotronContainer />
			<FooterContainer />
		</>
	)
}
