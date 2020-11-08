// import dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Controls = () => {
	return (
		<div className='controls-wrapper'>
			<div className='time-control'>
				<p>Start Time</p>
				<input type='range' />
				<p>End Time</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon className='skip-prev' size="2x" icon={faAngleLeft} />
				<FontAwesomeIcon className='play-icon' size="2x" icon={faPlay} />
				<FontAwesomeIcon className='skip-next' size="2x" icon={faAngleRight} />
			</div>
		</div>
	)
}

export default Controls