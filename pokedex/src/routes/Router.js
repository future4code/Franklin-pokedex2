import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import Home from "../pages/Home/Home";
import DetailPage from '../pages/DetailPage/DetailPage'
import Pokedex from '../pages/Pokedex/Pokedex'


const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detalhes/:id' element={<DetailPage />}/>
            <Route path='/pokedex' element={<Pokedex />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router