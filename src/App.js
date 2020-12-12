import { useState, useRef } from 'react'

// import styles
import './styles/app.scss'

// import components
import Controls from './components/Controls'
import Track from './components/Track'
import Library from './components/Library'
import Nav from './components/Nav'

// import util
import data from './data'

function App() {
	// ref
	const audioRef = useRef(null)

	// state
	const [tracks, setTracks] = useState(data())
	const [currentTrack, setCurrentTrack] = useState(tracks[0])
	const [isPlaying, setIsPlaying] = useState(false)
	const [libraryToggled, setLibraryToggled] = useState(false)
	const [volume, setVolume] = useState(0.8)

	return (
		<div className={`App${libraryToggled ? ' library-active' : ''}`}>
			<Nav
				libraryToggled={libraryToggled}
				setLibraryToggled={setLibraryToggled}
			/>
			<Track currentTrack={currentTrack} isPlaying={isPlaying} />
			<Controls
				currentTrack={currentTrack}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				audioRef={audioRef}
				tracks={tracks}
				setCurrentTrack={setCurrentTrack}
				setTracks={setTracks}
				volume={volume}
				setVolume={setVolume}
			/>
			<Library
				audioRef={audioRef}
				tracks={tracks}
				setCurrentTrack={setCurrentTrack}
				setTracks={setTracks}
				isPlaying={isPlaying}
				libraryToggled={libraryToggled}
			/>
		</div>
	)
}

export default App
