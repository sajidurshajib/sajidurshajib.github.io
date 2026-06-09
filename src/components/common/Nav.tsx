import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const nameSpring = { type: 'spring' as const, stiffness: 400, damping: 30 }
const navSpring = { type: 'spring' as const, stiffness: 500, damping: 30 }

const nameVariants = {
    rest: { y: 0 },
    hover: { y: -24 },
}

const lastNameVariants = {
    rest: { y: 24 },
    hover: { y: 0 },
}

const Nav: React.FC = () => {
    const prefersReducedMotion = useReducedMotion()
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(() => {
        const html = document.documentElement
        if (darkMode) {
            html.classList.remove('light')
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            html.classList.remove('dark')
            html.classList.add('light')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <div className="fixed left-0 top-0 py-3 w-full bg-white/80 dark:bg-ink/85 backdrop-blur-md border-b border-transparent dark:border-ink-border">
            <div className="max-w-[55ch] mx-auto px-4 md:px-0 grid grid-cols-12 my-2">
                <div className="col-span-3">
                    <span className="font-semibold cursor-pointer">
                        <Link to="/">
                            {prefersReducedMotion ? (
                                <span>Sajidur</span>
                            ) : (
                                <motion.span
                                    className="block overflow-hidden relative h-[24px]"
                                    initial="rest"
                                    whileHover="hover"
                                >
                                    <motion.span
                                        className="absolute left-0 block"
                                        variants={nameVariants}
                                        transition={nameSpring}
                                    >
                                        Sajidur
                                    </motion.span>
                                    <motion.span
                                        className="absolute left-0 block"
                                        variants={lastNameVariants}
                                        transition={nameSpring}
                                    >
                                        Rahman
                                    </motion.span>
                                </motion.span>
                            )}
                        </Link>
                    </span>
                </div>
                <div className="col-span-9 relative">
                    <ul className="list-none absolute right-0">
                        <motion.li
                            className="float-left px-2 md:px-4 hover:text-blue-400 hover:cursor-pointer"
                            whileHover={
                                prefersReducedMotion ? undefined : { y: -1 }
                            }
                            transition={navSpring}
                        >
                            <Link to="/">👨🏻‍💻 Me</Link>
                        </motion.li>
                        <motion.li
                            className="float-left px-2 md:px-4 hover:text-blue-400 hover:cursor-pointer"
                            whileHover={
                                prefersReducedMotion ? undefined : { y: -1 }
                            }
                            transition={navSpring}
                        >
                            <Link to="/portfolio">📁 Portfolio</Link>
                        </motion.li>
                        <motion.li
                            className="float-left px-2 md:px-4 hover:text-blue-400 hover:cursor-pointer"
                            whileHover={
                                prefersReducedMotion ? undefined : { y: -1 }
                            }
                            transition={navSpring}
                        >
                            <Link to="/blog">📔 Blog</Link>
                        </motion.li>

                        <motion.li
                            className="moon float-left px-1 md:px-4 hover:cursor-pointer"
                            onClick={() => setDarkMode(!darkMode)}
                            whileHover={
                                prefersReducedMotion
                                    ? undefined
                                    : { rotate: 12, y: -1 }
                            }
                            transition={navSpring}
                        >
                            {!darkMode ? '⏾' : '☀︎'}
                        </motion.li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
