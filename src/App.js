// import styles
import './styles/app.scss'

// import components
import Controls from './components/Controls'
import Track from './components/Track'

function App() {
	return (
		<div className='App'>
			<Track/>
      <Controls/>
		</div>
	)
}

export default App