import { MainLayout } from '@/components/layouts/index'
import { Blog, Me, Portfolio } from '@/pages/index'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Me />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="blog" element={<Blog />} />
            </Route>
        </Routes>
    )
}

export default Router
