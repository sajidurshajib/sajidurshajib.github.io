import classes from './Skill.module.css'
import Skills from './Skills/Skills'

const Skill = () => {
    return (
        <div className={`${classes.Skill} ${'main-wrapper'}`}>
            <h2>What I do</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea earum explicabo eveniet odit quae debitis
                autem incidunt. At explicabo omnis dolores blanditiis maxime? Natus adipisci amet aperiam reiciendis
                obcaecati esse, labore a, facilis sit veritatis vero nam repellendus, ut veniam numquam dolore rem
                quidem cum illo! Eaque dicta perferendis enim?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Autem, enim harum neque aliquam consequuntur optio ad perferendis natus temporibus mollitia!
            </p>
            <br />
            <Skills />
        </div>
    )
}

export default Skill
