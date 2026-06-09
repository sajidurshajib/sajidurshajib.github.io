import { Footer, MainBanner, Nav } from '@/components/common/index'
import { motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const location = useLocation()
    const prefersReducedMotion = useReducedMotion()

    return (
        <div className="max-w-[55ch] mx-auto px-4 md:px-0">
            <Nav />
            <MainBanner />
            <motion.div
                key={location.pathname}
                initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 6 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
            >
                <Outlet />
            </motion.div>
            <Footer />
        </div>
    )
}

export default MainLayout
