import classes from './SideBar.module.css'
import proPic from '../../assets/img/24451343.jpeg'
import '../../assets/fontawesome/css/all.min.css'
import '../../assets/fontawesome/css/solid.min.css'
import Social from './Social/Social'
import Menu from './Menu/Menu'

const SideBar = ()=> {
    return(
        <div className={`${classes.SideBar} ${"prime-color"}`}>
            <h2 className={classes.Name}>Sajidur Rahman</h2>
            <img className={classes.proPic} src={proPic} alt="proPic"/>
            <p className={classes.hi}>Hi, i'm Sajidur. I'm a Software Engineer and Web Developer. Welcome to my personal portfolio website.</p>
            
            <Social />
            <Menu />

            <a href="google.com" className={classes.hire}><i className="fas fa-paper-plane"></i> Hire me</a>

        </div>
    )
}

export default SideBar