import classes from './Modal.module.css'

const HireModal = ({ close }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalBox}>
                <button className={classes.close} onClick={() => close(0)}>
                    X
                </button>
                <h4>Hire me</h4>
                <p>Thank you in advanced for your interest.</p>

                <div className={classes.formModal}>
                    <form action="">
                        <input type="text" placeholder="Subject" />
                        <input type="email" placeholder="Email" />
                        <textarea name="" id="" cols="50" rows="6" placeholder="Message..."></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HireModal
