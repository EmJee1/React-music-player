// import audio
import boca__dreamcatcher_audio from './uploads/audio/boca__dreamcatcher.mp3'
import lovesick_girls__blackpink_audio from './uploads/audio/lovesick_girls__blackpink.mp3'
import villain__alexa_audio from './uploads/audio/villain__alexa.mp3'
// import images
import boca__dreamcatcher_img from './uploads/img/boca__dreamcatcher.jpg'
import lovesick_girls__blackpink_img from './uploads/img/lovesick_girls__blackpink.png'
import villain__alexa_img from './uploads/img/villain__alexa.jpg'

import { v4 as uuidv4 } from 'uuid'

const chillHop = () => {
	return [
		{
			name: 'Lovesick Girls',
			cover: lovesick_girls__blackpink_img,
			artist: 'Blackpink',
			audio: lovesick_girls__blackpink_audio,
			color: ['#A4717F', '#E0CFD4'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Boca',
			cover: boca__dreamcatcher_img,
			artist: 'Dreamcatcher',
			audio: boca__dreamcatcher_audio,
			color: ['#1971A9', '#B6E2FE'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Villain',
			cover: villain__alexa_img,
			artist: 'AleXa',
			audio: villain__alexa_audio,
			color: ['#1971A9', '#B6E2FE'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Beaver Creek',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
			artist: 'Aso, Middle School, Aviino',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
			color: ['#205950', '#2ab3bf'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Daylight',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
			artist: 'Aiguille',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
			color: ['#EF8EA9', '#ab417f'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Keep Going',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
			artist: 'Swørn',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
			color: ['#CD607D', '#c94043'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Nightfall',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
			artist: 'Aiguille',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
			color: ['#EF8EA9', '#ab417f'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Reflection',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
			artist: 'Swørn',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
			color: ['#CD607D', '#c94043'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Under the City Stars',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
			artist: 'Aso, Middle School, Aviino',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
			color: ['#205950', '#2ab3bf'],
			id: uuidv4(),
			active: false,
		},
	]
}

export default chillHop