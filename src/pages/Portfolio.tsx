import data from '@/config/data.json'
import { motion, useReducedMotion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 },
}

const listContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
}

const transition = { duration: 0.25, ease: 'easeOut' as const }

const skillTagClass =
    'inline-block relative z-0 hover:z-10 text-xs px-3 py-1 ' +
    'bg-gray-100 dark:bg-ink-muted border border-transparent dark:border-ink-border rounded-md ' +
    'transition-[transform,border-color] duration-200 ease-out origin-center ' +
    'motion-safe:hover:scale-125 motion-safe:hover:border-blue-300 dark:motion-safe:hover:border-blue-400'

const SkillTags: React.FC<{ skills: string[] }> = ({ skills }) => (
    <div className="flex flex-wrap gap-1">
        {skills.map((skill, index) => (
            <span className={skillTagClass} key={index}>
                {skill}
            </span>
        ))}
    </div>
)

const Portfolio = () => {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return (
            <div className="content-div mt-12">
                <h4 className="py-2 text-gray-700 dark:text-white text-xl font-semibold">
                    What I know
                </h4>
                <div className="mb-4">
                    <SkillTags skills={data.skills} />
                </div>
                <h5 className="pb-2 text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    What I knew
                </h5>
                <div className="mb-4">
                    <SkillTags skills={data.skillsPast} />
                </div>
                <h4 className="py-6 text-gray-700 dark:text-white text-xl font-semibold">
                    Projects That Define My Journey
                </h4>
                <ul className="text-gray-500 dark:text-gray-300 text-justify text-sm">
                    {data.projects.map((project, index) => (
                        <li className="mb-6" key={index}>
                            <b className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.icon} {project.name}
                                    </a>
                                ) : (
                                    <span>
                                        {project.icon} {project.name}
                                    </span>
                                )}
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

    return (
        <motion.div
            className="content-div mt-12"
            initial="hidden"
            animate="show"
            variants={{
                show: { transition: { staggerChildren: 0.06 } },
            }}
        >
            <motion.h4
                variants={fadeUp}
                transition={transition}
                className="py-2 text-gray-700 dark:text-white text-xl font-semibold"
            >
                What I know
            </motion.h4>
            <motion.div
                variants={fadeUp}
                transition={transition}
                className="mb-4"
            >
                <SkillTags skills={data.skills} />
            </motion.div>
            <motion.h5
                variants={fadeUp}
                transition={transition}
                className="pb-2 text-gray-600 dark:text-gray-400 text-sm font-semibold"
            >
                What I knew
            </motion.h5>
            <motion.div
                variants={fadeUp}
                transition={transition}
                className="mb-4"
            >
                <SkillTags skills={data.skillsPast} />
            </motion.div>
            <motion.h4
                variants={fadeUp}
                transition={transition}
                className="py-6 text-gray-700 dark:text-white text-xl font-semibold"
            >
                Projects That Define My Journey
            </motion.h4>
            <motion.ul
                className="text-gray-500 dark:text-gray-300 text-justify text-sm"
                variants={listContainer}
            >
                {data.projects.map((project, index) => (
                    <motion.li
                        className="mb-6"
                        key={index}
                        variants={fadeUp}
                        transition={transition}
                    >
                        <b className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.icon} {project.name}
                                </a>
                            ) : (
                                <span>
                                    {project.icon} {project.name}
                                </span>
                            )}
                        </b>{' '}
                        | {project.year}
                        <p className="my-2 text-black dark:text-white text-xs">
                            {project.tech}
                        </p>
                        <p className="mt-1">{project.details}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    )
}

export default Portfolio
