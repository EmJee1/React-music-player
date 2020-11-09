import { useState } from 'react'

// import dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
} from '@fortawesome/free-solid-svg-icons'

const Controls = ({ currentTrack, isPlaying, setIsPlaying, audioRef }) => {
	// event handlers
	const playTrackHandler = () => {
		if (isPlaying) {
			audioRef.current.pause()
		} else {
			audioRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}
	const updateTimeHandler = e => {
		const current = e.target.currentTime
		const duration = e.target.duration
		setTrackInfo({ ...trackInfo, currentTime: current, duration: duration })
	}
	const formatTime = time =>
		Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
	const dragRangeHandler = e => {
		audioRef.current.currentTime = e.target.value
		setTrackInfo({ ...trackInfo, currentTime: e.target.value })
	}

	// state
	const [trackInfo, setTrackInfo] = useState({
		currentTime: 0,
		duration: 0,
	})

	return (
		<div className='controls-wrapper'>
			<div className='time-control'>
				<p>{formatTime(trackInfo.currentTime)}</p>
				<input
					min={0}
					max={trackInfo.duration || 0}
					value={trackInfo.currentTime}
					onChange={dragRangeHandler}
					type='range'
				/>
				<p>{formatTime(trackInfo.duration)}</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon className='skip-prev' size='2x' icon={faAngleLeft} />
				<FontAwesomeIcon
					onClick={playTrackHandler}
					className='play-icon'
					size='2x'
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon className='skip-next' size='2x' icon={faAngleRight} />
			</div>
			<audio
				onTimeUpdate={updateTimeHandler}
				onLoadedMetadata={updateTimeHandler}
				ref={audioRef}
				src={currentTrack.audio}
			></audio>
		</div>
	)
}

export default Controls