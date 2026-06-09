import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LINKEDIN_URL = 'https://www.linkedin.com/in/sajidurshajib/'
const STORAGE_KEY = 'engagement-modal-seen'
const DELAY_MS = 5_000

const EngagementModal: React.FC = () => {
    const prefersReducedMotion = useReducedMotion()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem(STORAGE_KEY)) return

        const timer = setTimeout(() => {
            if (!sessionStorage.getItem(STORAGE_KEY)) {
                setOpen(true)
            }
        }, DELAY_MS)

        return () => clearTimeout(timer)
    }, [])

    const dismiss = () => {
        sessionStorage.setItem(STORAGE_KEY, '1')
        setOpen(false)
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="engagement-modal-title"
                >
                    <button
                        type="button"
                        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
                        onClick={dismiss}
                        aria-label="Close dialog"
                    />
                    <motion.div
                        className="relative w-full max-w-sm p-6 rounded-2xl shadow-xl
                            bg-white/90 dark:bg-ink/95 backdrop-blur-md
                            border border-gray-200 dark:border-ink-border"
                        initial={
                            prefersReducedMotion
                                ? false
                                : { opacity: 0, y: 16, scale: 0.96 }
                        }
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 8, scale: 0.98 }
                        }
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                        <button
                            type="button"
                            onClick={dismiss}
                            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center
                                rounded-full text-gray-400 hover:text-gray-600
                                dark:hover:text-gray-200 transition-colors cursor-pointer"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <p className="text-2xl mb-2">👋</p>
                        <h2
                            id="engagement-modal-title"
                            className="text-lg font-semibold text-gray-800 dark:text-white pr-6"
                        >
                            Want to talk?
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Thanks for stopping by. Feel free to reach out on
                            LinkedIn — always happy to chat.
                        </p>
                        <div className="mt-5 flex flex-col gap-2">
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={dismiss}
                                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold
                                    bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
                                    text-white transition-colors"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                                <span>Message me on LinkedIn</span>
                            </a>
                            <button
                                type="button"
                                onClick={dismiss}
                                className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer transition-colors py-1"
                            >
                                Maybe later
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default EngagementModal
