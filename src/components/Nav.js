import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ libraryToggled, setLibraryToggled }) => {
	return (
		<nav>
			<h1>Demzy</h1>
			<button onClick={() => setLibraryToggled(!libraryToggled)}>
				Library
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	)
}

export default Nav