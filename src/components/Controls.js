import { useState, useEffect } from 'react'

// import dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
} from '@fortawesome/free-solid-svg-icons'

const Controls = ({
	currentTrack,
	isPlaying,
	setIsPlaying,
	audioRef,
	tracks,
	setCurrentTrack,
	setTracks,
}) => {
	// useEffect
	useEffect(() => {
		const newTracks = tracks.map(t => {
			if (t.id === currentTrack.id) {
				return { ...t, active: true }
			} else {
				return { ...t, active: false }
			}
		})
		setTracks(newTracks)
	}, [currentTrack])

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
		// calculate percentage
		const percentage = Math.round(
			(Math.round(current) / Math.round(duration)) * 100
		)
		setTrackInfo({
			...trackInfo,
			currentTime: current,
			duration: duration,
			animationPercentage: percentage,
		})
	}
	const formatTime = time =>
		Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
	const dragRangeHandler = e => {
		audioRef.current.currentTime = e.target.value
		setTrackInfo({ ...trackInfo, currentTime: e.target.value })
	}
	const skipTrackHandler = async direction => {
		if (typeof direction !== 'number') return
		const currentIndex = tracks.findIndex(t => t.id === currentTrack.id)
		if (currentIndex < 1 && direction < 0)
			await setCurrentTrack(tracks[tracks.length - 1])
		else
			await setCurrentTrack(tracks[(currentIndex + direction) % tracks.length])
		if (isPlaying) audioRef.current.play()
	}

	// state
	const [trackInfo, setTrackInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	})

	// add input styles
	const trackAnimation = {
		transform: `translateX(${trackInfo.animationPercentage}%)`,
	}
	return (
		<div className='controls-wrapper'>
			<div className='time-control'>
				<p>{formatTime(trackInfo.currentTime)}</p>
				<div
					className='input-wrapper'
					style={{
						background: `linear-gradient(to right, ${currentTrack.color[0]}, ${currentTrack.color[1]})`,
					}}
				>
					<input
						min={0}
						max={trackInfo.duration || 0}
						value={trackInfo.currentTime}
						onChange={dragRangeHandler}
						type='range'
					/>
					<div className='animate-input' style={trackAnimation}></div>
				</div>
				<p>{trackInfo.duration ? formatTime(trackInfo.duration) : '0:00'}</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler(-1)}
					className='skip-prev icons'
					size='2x'
					icon={faAngleLeft}
				/>
				<FontAwesomeIcon
					onClick={playTrackHandler}
					className='play-icon icons'
					size='2x'
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler(1)}
					className='skip-next icons'
					size='2x'
					icon={faAngleRight}
				/>
			</div>
			<audio
				onTimeUpdate={updateTimeHandler}
				onLoadedMetadata={updateTimeHandler}
				ref={audioRef}
				src={currentTrack.audio}
				onEnded={() => skipTrackHandler(1)}
			></audio>
		</div>
	)
}

export default Controls