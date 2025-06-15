import data from '@/config/data.json'

const Portfolio = () => {
    return (
        <div className="content-div mt-12">
            <h4 className="py-2 text-gray-700 dark:text-white text-xl font-semibold">
                What I know
            </h4>
            <div className="flex flex-wrap gap-1 mb-4">
                {data.skills.map((skill, index) => (
                    <span
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-blue-950 rounded-md"
                        key={index}
                    >
                        {skill}
                    </span>
                ))}
            </div>
            <h4 className="py-6 text-gray-700 dark:text-white text-xl font-semibold">
                Projects That Define My Journey
            </h4>
            <ul className="text-gray-500 dark:text-gray-300 text-justify text-sm">
                {data.projects.map((project, index) => (
                    <li className="mb-6" key={index}>
                        <b className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                            <a href={project.link}>
                                {project.icon} {project.name}
                            </a>
                        </b>{' '}
                        | {project.year}
                        <p className="my-2 text-black dark:text-white text-xs">
                            {project.tech}
                        </p>
                        <p className="mt-1">{project.details}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Portfolio
