import { useState, useRef } from 'react'

// import styles
import './styles/app.scss'

// import components
import Controls from './components/Controls'
import Track from './components/Track'
import Library from './components/Library'

// import util
import data from './util'

function App() {
	// ref
	const audioRef = useRef(null)

	// state
	const [tracks, setTracks] = useState(data())
	const [currentTrack, setCurrentTrack] = useState(tracks[0])
	const [isPlaying, setIsPlaying] = useState(false)

	return (
		<div className='App'>
			<Track currentTrack={currentTrack} />
			<Controls
				currentTrack={currentTrack}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				audioRef={audioRef}
			/>
			<Library
				audioRef={audioRef}
				tracks={tracks}
				setCurrentTrack={setCurrentTrack}
				setTracks={setTracks}
				isPlaying={isPlaying}
			/>
		</div>
	)
}

export default App