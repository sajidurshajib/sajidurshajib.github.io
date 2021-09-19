import { faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import hero from '../../assets/img/hero.png'
import config from '../../config.json'
import classes from './Intro.module.css'
import HireModal from './Modal/HireModal'
import ResumeModal from './Modal/ResumeModal'

const Intro = () => {
    const [data, setData] = useState('')
    const [modal, setModal] = useState(0)

    const gitUser = config.githubUsername

    useEffect(() => {
        fetch(`https://api.github.com/users/${gitUser}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response
            })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    return (
        <div className={`${classes.Intro} ${'main-wrapper'}`}>
            {modal === 1 ? <HireModal close={setModal} /> : null}
            {modal === 2 ? <ResumeModal close={setModal} /> : null}

            <div className={classes.IntroWrapper}>
                <div className="row">
                    <div className="col-md-8">
                        {data.name ? <h1>{data.name}</h1> : <h1>{config.name}</h1>}

                        <h4>{config.position}</h4>
                        <p>{config.about}</p>

                        <div className={classes.btnWrapper}>
                            <button className={classes.btnPrime} onClick={() => setModal(1)}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                                Hire me
                            </button>
                            <button className={classes.btnDark} onClick={() => setModal(2)}>
                                <FontAwesomeIcon icon={faFileAlt} />
                                View Resume
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            style={{
                                backgroundImage: `url(${hero})`,
                            }}
                            className={classes.heroImg}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intro
