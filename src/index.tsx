import ReactDOM from 'react-dom'
import 'normalize.css'
import { App } from './App'
import { GlobalStyles } from './global-styles'

ReactDOM.render(
	<>
		<GlobalStyles />
		<App />
	</>,
	document.getElementById('root')
)
