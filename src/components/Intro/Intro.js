import { faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import hero from '../../assets/img/hero.png'
import config from '../../config.json'
import classes from './Intro.module.css'

const Intro = () => {
    const [data, setData] = useState('')

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
            <div className={classes.IntroWrapper}>
                <div className="row">
                    <div className="col-md-8">
                        {data.name ? <h1>{data.name}</h1> : <h1>{config.name}</h1>}

                        <h4>{config.position}</h4>
                        <p>{config.about}</p>
                        <div className={classes.btnWrapper}>
                            <a className={classes.btnPrime} href="hireme/">
                                <FontAwesomeIcon icon={faPaperPlane} />
                                Hire me
                            </a>
                            <a className={classes.btnDark} href="resume/">
                                <FontAwesomeIcon icon={faFileAlt} />
                                View Resume
                            </a>
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
