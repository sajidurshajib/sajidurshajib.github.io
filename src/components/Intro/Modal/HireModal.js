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
                    <form action="https://formsubmit.io/send/e021aa0f-84e1-4114-a3d6-dfe0bca6b27a" method="post">
                        <input name="subject" type="text" placeholder="Subject" />
                        <input name="email" type="email" placeholder="Email" />
                        <textarea name="message" id="" cols="50" rows="6" placeholder="Message..."></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HireModal
