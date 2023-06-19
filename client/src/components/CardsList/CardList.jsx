import Card from "../Cards/Card";
import style from './CardList.module.css'

const CardList = ({allPokemon}) => {

    const ListPokemon = allPokemon;

    return (
        <div className={style.cardList_container}>
         {ListPokemon?.map((pokemon, index) => (
                <Card key={index} pokemon={pokemon}/>
            ))}
        </div>
    );

};

export default CardList;