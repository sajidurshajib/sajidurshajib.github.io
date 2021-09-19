import classes from './Modal.module.css'

const ResumeModal = ({ close }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalBox}>
                <button className={classes.close} onClick={() => close(0)}>
                    X
                </button>
                <h3>Resume</h3>
            </div>
        </div>
    )
}

export default ResumeModal
