import AppRouter from "./routers/AppRouter"
import Footer from './components/ui/Footer'
import './index.css'

const HeroesApp = () => {
    return (
        <div className="d-flex flex-column justify-content-between min-vh-100">
            <AppRouter />
            <Footer />
        </div>
    )
}

export default HeroesApp
