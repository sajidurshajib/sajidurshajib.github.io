import classes from './Menu.module.css'
const Menu = ()=>{
    return(
        <div className={classes.Menu}>
            <ul>
                <li><a href="google.com"><i className="fas fa-user"></i> About</a></li>
                <li><a href="google.com"><i className="fas fa-file-code"></i> What I Do</a></li>
                <li><a href="google.com"><i className="fas fa-book"></i> Repositories</a></li>
                <li><a href="#portfolio"><i className="fa fa-briefcase"></i> Portfolio</a></li>
                <li><a href="google.com"><i className="fas fa-envelope-open-text"></i> Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu