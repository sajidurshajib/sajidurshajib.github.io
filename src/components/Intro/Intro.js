import classes from './Intro.module.css'
import '../../assets/fontawesome/css/fontawesome.min.css'
import hero from '../../assets/img/hero.png'

const Intro = ()=> {
    return (
        <div className={`${classes.Intro} ${"main-wrapper"}`}>
            <div className={classes.IntroWrapper}>
                <div className="row">
                    <div className="col-md-8">
                        <h1>Sajidur Rahman Shajib</h1>
                        <h4>Software engineer and Web developer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo ullam vel sequi, voluptates voluptate consectetur maxime temporibus assumenda officia inventore harum porro. Iste, nisi incidunt excepturi explicabo soluta veritatis!</p>
                        <div className={classes.btnWrapper}>
                            <a className={classes.btnPrime} href="hireme/"><i className="fas fa-paper-plane"></i> Hire me</a>
                            <a className={classes.btnDark} href="resume/"><i className="fas fa-file-alt"></i> View Resume</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{
                            backgroundImage:`url(${hero})`,
                            width: '270px',
                            height: '260px',
                            backgroundPosition: 'center',
                            backgroundSize:'cover',
                            display: 'block',
                            margin: '0 auto'
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intro