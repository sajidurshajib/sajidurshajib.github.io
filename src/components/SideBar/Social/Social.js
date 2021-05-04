import classes from './Social.module.css'
import '../../../assets/fontawesome/css/all.min.css'

const Social = ()=>{
    return(
        <div className={classes.Social}>
            <ul>
                <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                <li><a href="google.com"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="google.com"><i className="fab fa-github"></i></a></li>
                <li><a href="google.com"><i className="fab fa-facebook-f"></i></a></li>
            </ul>

            <span className={classes.hrSpan}></span>
        </div>
    )
}

export default Social