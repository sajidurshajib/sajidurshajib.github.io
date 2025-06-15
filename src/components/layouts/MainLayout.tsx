import { Footer, MainBanner, Nav } from '@/components/common/index'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="max-w-[55ch] mx-auto px-4 md:px-0">
            <Nav />
            <MainBanner />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
