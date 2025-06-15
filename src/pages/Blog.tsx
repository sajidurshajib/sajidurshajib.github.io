import Spinner from '@/components/common/Spinner'
import React, { useEffect, useState } from 'react'

type BlogPost = {
    title: string
    canonical_url: string
    description: string
}

const Blog: React.FC = () => {
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

    if (loading) {
        console.log('Loading blog posts...')
        return <Spinner />
    } else {
        return (
            <div className="content-div mt-12">
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
                <a
                    href="https://dev.to/sajidurshajib"
                    className="text-sm font-semibold text-blue-400"
                >
                    Check out more on my blog!
                </a>
            </div>
        )
    }
}

export default Blog
