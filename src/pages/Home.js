import { useReducer } from 'react'
import { sidebarContext } from '../allContext'
import Intro from '../components/Intro/Intro'
import SideBar from '../components/SideBar/SideBar'
import Skill from '../components/Skill/Skill'
import { sidebarState, sidebarReducer } from '../reducer/sidebarReducer'

const Home = () => {
    const [state, dispatch] = useReducer(sidebarReducer, sidebarState)

    return (
        <div>
            <sidebarContext.Provider value={{ state, dispatch }}>
                <SideBar />
                <Intro />
                <Skill />
            </sidebarContext.Provider>
        </div>
    )
}

export default Home
