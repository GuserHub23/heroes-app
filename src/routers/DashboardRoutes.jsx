import { Routes, Route } from 'react-router-dom';

import Navbar from "../components/ui/Navbar";

import DcScreen from '../components/dc/DcScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/hero/HeroScreen';



const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />}/>
                    <Route path="dc" element={<DcScreen />}/>

                    <Route path="hero/:heroeId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />}/>

                </Routes>
            </div>
        </>
    )
}

export default DashboardRoutes
