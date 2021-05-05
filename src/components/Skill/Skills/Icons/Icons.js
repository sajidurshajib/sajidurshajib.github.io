import classes from './Icons.module.css'

const Icons = (props)=> {
    return(
        <div className={classes.Icons}>
            <ul>
                {props.Icons.map((v, i)=>{
                    return(
                        <li className={classes.icon} key={i}>
                            <i className={v}></i>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Icons