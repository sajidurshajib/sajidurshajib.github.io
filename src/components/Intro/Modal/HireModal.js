import classes from './Modal.module.css'

const HireModal = ({ close }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalBox}>
                <button className={classes.close} onClick={() => close(0)}>
                    X
                </button>
                <h4>Hire me</h4>
                <p>
                    This modal not available for send me any kind of information. So you can send email at{' '}
                    <span>sajdiur.inbox@gmail.com</span>
                </p>
            </div>
        </div>
    )
}

export default HireModal
