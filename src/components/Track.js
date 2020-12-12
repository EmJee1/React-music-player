const Track = ({ currentTrack, isPlaying }) => {
	return (
		<div className={`track-wrapper${isPlaying ? ' playing' : ''}`}>
			<div className='img-wrapper'>
				<img
					alt={currentTrack.name + ' cover image'}
					src={currentTrack.cover}
				/>
			</div>
			<h2>{currentTrack.name}</h2>
			<h3>{currentTrack.artist}</h3>
		</div>
	)
}

export default Track
