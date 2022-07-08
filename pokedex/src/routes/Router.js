import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/Home";
import DetailPage from '../pages/DetailPage/DetailPage'
import Pokedex from '../pages/Pokedex/Pokedex'
import { useState } from 'react';


const Router = () => {
    const [addPokemon, setAddPokemon] = useState([])
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home addPokemon={addPokemon} setAddPokemon={setAddPokemon}/>}/>
            <Route path='/detalhes/:name' element={<DetailPage/>}/>
            <Route path='/pokedex' element={<Pokedex addPokemon={addPokemon} setAddPokemon={setAddPokemon}/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router