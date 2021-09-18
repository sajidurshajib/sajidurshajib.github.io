import { faBook, faBriefcase, faEnvelopeOpenText, faFileCode, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Menu.module.css'

const Menu = () => {
    return (
        <div className={classes.Menu}>
            <ul>
                <li>
                    <a href="google.com">
                        <FontAwesomeIcon icon={faUser} />
                        About
                    </a>
                </li>
                <li>
                    <a href="google.com">
                        <FontAwesomeIcon icon={faFileCode} />
                        What I Do
                    </a>
                </li>
                <li>
                    <a href="google.com">
                        <FontAwesomeIcon icon={faBook} />
                        Repositories
                    </a>
                </li>
                <li>
                    <a href="#portfolio">
                        <FontAwesomeIcon icon={faBriefcase} />
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="google.com">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
