const Track = ({ currentTrack }) => {
	return (
		<div className='track-wrapper'>
			<img alt={currentTrack.name + ' cover image'} src={currentTrack.cover} />
			<h2>{currentTrack.name}</h2>
			<h3>{currentTrack.artist}</h3>
		</div>
	)
}

export default Track