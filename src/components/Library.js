import LibraryTrack from './LibraryTrack'

const Library = ({ tracks, setCurrentTrack, audioRef, isPlaying, setTracks }) => {
	return (
		<div className='library'>
			<h2>Library</h2>
			<div className='library-tracks'>
				{tracks.map(track => (
					<LibraryTrack
						setCurrentTrack={setCurrentTrack}
						tracks={tracks}
						track={track}
						key={track.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setTracks={setTracks}
					/>
				))}
			</div>
		</div>
	)
}

export default Library