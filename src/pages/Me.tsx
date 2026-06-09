import data from '@/config/data.json'

const Me = () => {
    return (
        <div className="content-div mt-8">
            <h4 className="text-gray-700 dark:text-white py-2 text-xl font-semibold">
                I'm
            </h4>
            <p className="text-gray-500 dark:text-gray-300 text-md text-justify">
                A Software Engineer with experience across full-stack
                development, databases, and microservices in JavaScript and
                Python. I stay involved after deploy, fixing production issues,
                improving monitoring, and cutting manual ops so what I build
                stays reliable when real users depend on it. Most of my work
                blends shipping features with keeping systems steady in live
                environments. Production reliability, observability, and
                infrastructure automation are as important to me as writing the
                code itself.
            </p>
            <h4 className="text-gray-700 dark:text-white pb-2 mt-10 mb-2 text-xl font-semibold">
                My Professional Journey
            </h4>
            <ul className="text-gray-500 dark:text-gray-300 text-justify text-sm">
                {data.prof_journey.map((item, index) => (
                    <li className="mb-3" key={index}>
                        <b className="text-gray-700 dark:text-white tracking-widest">
                            {item.icon} {item.company}
                        </b>{' '}
                        - {item.role}
                        <p className="mt-1">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Me
