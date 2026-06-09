import { faDev, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { motion, useReducedMotion } from 'framer-motion'

const navSpring = { type: 'spring' as const, stiffness: 500, damping: 30 }

const iconButtonClass =
    'inline-flex items-center justify-center w-10 h-10 rounded-full ' +
    'bg-white/60 dark:bg-ink-muted/60 backdrop-blur-sm ' +
    'border border-gray-200 dark:border-ink-border ' +
    'hover:border-blue-300 dark:hover:border-blue-400/50 ' +
    'hover:text-blue-500 dark:hover:text-blue-400 transition-colors'

type SocialLink = {
    href: string
    icon: IconDefinition
    label: string
    iconClassName: string
}

const socialLinks: SocialLink[] = [
    {
        href: 'https://www.linkedin.com/in/sajidurshajib/',
        icon: faLinkedin,
        label: 'LinkedIn',
        iconClassName: 'text-blue-700 dark:text-white',
    },
    {
        href: 'https://dev.to/sajidurshajib',
        icon: faDev,
        label: 'Dev.to',
        iconClassName: 'dark:text-white',
    },
    {
        href: 'https://www.github.com/sajidurshajib',
        icon: faGithub,
        label: 'GitHub',
        iconClassName: 'text-gray-700 dark:text-white',
    },
]

const Footer: React.FC = () => {
    const prefersReducedMotion = useReducedMotion()

    return (
        <footer className="py-6 mt-8 w-full">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-ink-border to-transparent mb-6" />
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-3">
                        Reach me
                    </h2>
                    <ul className="flex gap-3">
                        {socialLinks.map(({ href, icon, label, iconClassName }) => (
                            <li key={label}>
                                <motion.a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={iconButtonClass}
                                    whileHover={
                                        prefersReducedMotion
                                            ? undefined
                                            : { y: -2, scale: 1.05 }
                                    }
                                    transition={navSpring}
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className={`text-lg ${iconClassName}`}
                                    />
                                </motion.a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-right">
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-3">
                        Email
                    </h2>
                    <motion.a
                        href="mailto:sajidur.inbox@gmail.com"
                        className="group inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm
                            bg-white/60 dark:bg-ink-muted/60 backdrop-blur-sm
                            border border-gray-200 dark:border-ink-border
                            text-blue-500 dark:text-blue-400
                            hover:text-blue-600 dark:hover:text-blue-300
                            hover:border-blue-300 dark:hover:border-blue-400/50
                            transition-colors"
                        whileHover={
                            prefersReducedMotion ? undefined : { y: -2 }
                        }
                        transition={navSpring}
                    >
                        <span>✉️</span>
                        <span className="font-medium">sajidur.inbox@gmail.com</span>
                        <span
                            aria-hidden
                            className={`transition-transform ${
                                prefersReducedMotion
                                    ? ''
                                    : 'group-hover:translate-x-0.5'
                            }`}
                        >
                            →
                        </span>
                    </motion.a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
