import { faDev } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useReducedMotion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type BlogPost = {
    title: string
    canonical_url: string
    description: string
}

const SKELETON_COUNT = 7

const titleWidths = ['w-[72%]', 'w-[58%]', 'w-[80%]', 'w-[65%]', 'w-[74%]', 'w-[60%]', 'w-[68%]']

const BlogSkeleton: React.FC = () => (
    <>
        <ul>
            {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <li key={index} className="mb-4 animate-pulse">
                    <div
                        className={`h-4 bg-gray-200 dark:bg-ink-muted rounded ${titleWidths[index]}`}
                    />
                    <div className="h-3 bg-gray-100 dark:bg-ink-border rounded w-full mt-2" />
                    <div className="h-3 bg-gray-100 dark:bg-ink-border rounded w-[88%] mt-1" />
                </li>
            ))}
        </ul>
        <div className="h-9 bg-gray-200 dark:bg-ink-muted rounded-full w-52 mt-3 animate-pulse" />
    </>
)

const Blog: React.FC = () => {
    const prefersReducedMotion = useReducedMotion()
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchDevTo = async () => {
            try {
                const response = await fetch(
                    'https://dev.to/api/articles?username=sajidurshajib&per_page=7'
                )
                const json = await response.json()
                setBlogs(json)
            } catch (error) {
                console.error('Failed to fetch blog posts:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchDevTo()
    }, [])

    return (
        <div className="content-div mt-12">
            {loading ? (
                <BlogSkeleton />
            ) : (
                <>
                    <ul className="text-gray-500 dark:text-gray-300 text-justify text-sm">
                        {blogs.map(({ title, canonical_url, description }) => (
                            <li key={canonical_url} className="mb-4">
                                <b className="text-gray-700 dark:text-white tracking-widest hover:text-blue-500 dark:hover:text-blue-400">
                                    <a
                                        href={canonical_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {title}
                                    </a>
                                </b>
                                <p className="mb-1">{description}</p>
                            </li>
                        ))}
                    </ul>
                    <motion.a
                        href="https://dev.to/sajidurshajib"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full text-sm font-semibold
                            bg-white/60 dark:bg-ink-muted/60 backdrop-blur-sm
                            border border-gray-200 dark:border-ink-border
                            text-gray-700 dark:text-white
                            hover:text-blue-500 dark:hover:text-blue-400
                            hover:border-blue-300 dark:hover:border-blue-400/50
                            transition-colors"
                        whileHover={
                            prefersReducedMotion ? undefined : { y: -2 }
                        }
                        transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                        }}
                    >
                        <FontAwesomeIcon icon={faDev} className="text-base" />
                        <span>Check out more on my blog</span>
                        <span
                            aria-hidden
                            className={`text-blue-500 dark:text-blue-400 transition-transform ${
                                prefersReducedMotion
                                    ? ''
                                    : 'group-hover:translate-x-1'
                            }`}
                        >
                            →
                        </span>
                    </motion.a>
                </>
            )}
        </div>
    )
}

export default Blog
