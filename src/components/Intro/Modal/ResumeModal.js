import resumeImg from './../../../assets/img/resume.png'
import classes from './Modal.module.css'

const ResumeModal = ({ close }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalBox}>
                <button className={classes.close} onClick={() => close(0)}>
                    X
                </button>
                <div className={classes.resume} style={{ background: `url(${resumeImg})` }}></div>
            </div>
        </div>
    )
}

export default ResumeModal
