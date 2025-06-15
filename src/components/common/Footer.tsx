import { faDev, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer: React.FC = () => {
    return (
        <div className="py-3 w-full">
            <hr className="my-2 border-1 border-gray-100 dark:border-blue-950" />
            <div className="mt-4">
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="text-xl text-gray-700 dark:text-white font-semibold mb-2">
                            🧭 Reach Me Here
                        </h2>
                        <ul className="flex space-x-4 mb-4">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/sajidurshajib/"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="text-2xl text-blue-700 dark:text-white"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dev.to/sajidurshajib"
                                    target="_blank"
                                    aria-label="Dev.to"
                                >
                                    <FontAwesomeIcon
                                        icon={faDev}
                                        className="text-2xl dark:text-white"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.github.com/sajidurshajib"
                                    target="_blank"
                                    aria-label="GitHub"
                                >
                                    {' '}
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="text-2xl text-gray-700 dark:text-white"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl text-gray-700 dark:text-white font-semibold mb-2 text-right">
                            ✉️ Email
                        </h2>
                        <a
                            href="mailto:sajidur.inbox@gmail.com"
                            className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 block text-right"
                        >
                            sajidur.inbox@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
