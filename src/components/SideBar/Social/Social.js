import '../../../assets/fontawesome/css/all.min.css'
import '../../../assets/fontawesome/css/brands.min.css'
import '../../../assets/fontawesome/css/fontawesome.min.css'
import '../../../assets/fontawesome/css/regular.min.css'
import '../../../assets/fontawesome/css/solid.min.css'
import config from '../../../config.json'
import classes from './Social.module.css'

const socials = config.socials

const Social = () => {
    return (
        <div className={classes.Social}>
            <ul>
                {socials.map((v, i) => {
                    return (
                        <li key={i}>
                            <a href={v.url} target="_blank" rel="noreferrer">
                                <i className={v.icon}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>

            <span className={classes.hrSpan}></span>
        </div>
    )
}

export default Social
