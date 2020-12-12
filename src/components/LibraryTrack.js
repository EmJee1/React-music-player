const LibraryTrack = ({
	setCurrentTrack,
	track,
	tracks,
	audioRef,
	isPlaying,
	setTracks,
}) => {
	// event handlers
	const songSelectHandler = async () => {
		await setCurrentTrack(track)
		// add active state to the currently playing track
		const newTracks = tracks.map(t => {
			if (t.id === track.id) {
				return { ...t, active: true }
			} else {
				return { ...t, active: false }
			}
		})
		setTracks(newTracks)
		// play the new song if the current is playing
		if (isPlaying) audioRef.current.play()
	}

	return (
		<div
			onClick={songSelectHandler}
			className={`library-track${track.active ? ' selected' : ''}`}
		>
			<img alt={track.name + ' cover image'} src={track.cover} />
			<div className='track-description'>
				<h3>{track.name}</h3>
				<h4>{track.artist}</h4>
			</div>
		</div>
	)
}

export default LibraryTrack
