import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CardList from "../../components/CardsList/CardList";
import NavBar from "../../components/NavBar/NavBar";

import style from './Home.module.css'

import { getPokemons } from "../../redux/actions/actions";

const Home = () => {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons)
    useEffect(()=> {
        dispatch(getPokemons())
    }, [dispatch])


    return (
        <div className={style.home}>
            <h1 className={style.home_title}>Home</h1>
            <NavBar/>
            <CardList allPokemon={allPokemons}/>
        </div>
    )

}

export default Home;