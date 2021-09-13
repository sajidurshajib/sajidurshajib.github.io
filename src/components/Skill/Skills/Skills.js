import config from '../../../config.json'
import Icons from './Icons/Icons'
import classes from './Skills.module.css'

const Skills = () => {
    let skills = config.skills

    return (
        <div className={classes.Skills}>
            <div className="row">
                {skills.map((value, index) => {
                    return (
                        <div className="col-md-3 col-sm-6" key={value.id}>
                            <Icons Icons={value.icons} />

                            <p className={classes.header}>{value.header}</p>
                            <p className={classes.details}>{value.details}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
