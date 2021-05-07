import classes from './Social.module.css'
import config from '../../../config.json'

const socials = config.socials

const Social = ()=>{
    return(
        <div className={classes.Social}>
            <ul>
                {socials.map((v,i)=>{
                    return(
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