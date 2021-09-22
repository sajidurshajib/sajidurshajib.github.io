import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { sidebarContext } from '../../allContext'
import config from '../../config.json'
import Menu from './Menu/Menu'
import classes from './SideBar.module.css'
import './SlideHide.css'
import Social from './Social/Social'

const SideBar = () => {
    const { stateSidebar, dispatchSidebar } = useContext(sidebarContext)

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
    }, [gitUser])

    return (
        <div className={`${classes.SideBar} ${'prime-color'} ${stateSidebar.hide ? 'hideSide' : null}`}>
            <button
                className={`${classes.hideBtn} ${stateSidebar.hide ? 'hideBtn' : null}`}
                onClick={() => dispatchSidebar({ type: 'load', payload: !stateSidebar.hide })}>
                <i className="fas fa-angle-double-left"></i>
            </button>

            {data.name ? <h2 className={classes.Name}>{`${data.name?.split(' ').slice(0, 2).join(' ')}`}</h2> : null}

            {data.avatar_url ? <img className={classes.proPic} src={data.avatar_url} alt="proPic" /> : null}

            <p className={classes.hi}>{data.bio}</p>

            <Social />
            <Menu />

            <a href="google.com" className={classes.hire}>
                <FontAwesomeIcon icon={faPaperPlane} /> Hire me
            </a>
        </div>
    )
}

export default SideBar
