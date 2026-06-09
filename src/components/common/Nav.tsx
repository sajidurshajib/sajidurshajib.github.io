import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
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
                            <span className="block overflow-hidden group relative h-[24px]">
                                <p className="absolute left-0 top-0 group-hover:-top-[24px] transition-all">
                                    Sajidur
                                </p>
                                <p className="absolute left-0 top-10 group-hover:-top-0 transition-all">
                                    Rahman
                                </p>
                            </span>
                        </Link>
                    </span>
                </div>
                <div className="col-span-9 relative">
                    <ul className="list-none absolute right-0">
                        <li className="float-left px-2 md:px-4 hover:text-blue-400 hover:cursor-pointer">
                            <Link to="/">👨🏻‍💻 Me</Link>
                        </li>
                        <li className="float-left px-2 md:px-4 hover:text-blue-400 hover:cursor-pointer">
                            <Link to="/portfolio">📁 Portfolio</Link>
                        </li>
                        <li className="float-left px-2 md:px-4 hover:text-blue-400 hover:cursor-pointer">
                            <Link to="/blog">📔 Blog</Link>
                        </li>

                        <li
                            className="moon float-left px-1 md:px-4 hover:cursor-pointer"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {!darkMode ? '⏾' : '☀︎'}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
