import style from './Card.module.css';

const Card = ({pokemon}) => {

    const {name, image, types} = pokemon

    return (
        <div className={style.card_container}>
            <h2>{name}</h2>
            <img src={image} alt="" width='250' height='250'/>
            <div>
                {
                    types.map((type) => {
                        switch (type) {
                            case 'normal':
                                return (
                                    <p className={style.normal}>NORMAL</p>
                                );
                            case 'flying':
                                return (
                                    <p className={style.flying}>FLYING</p>
                                );
                            case 'fire':
                                return (
                                    <p className={style.fire}>FIRE</p>
                                );
                            case 'grass':
                                return (
                                    <p className={style.grass}>GRASS</p>
                                );
                            case 'poison':
                                return (
                                    <p className={style.poison}>POISON</p>
                                );
                            case 'water':
                                return (
                                    <p className={style.water}>WATER</p>
                                );
                            case 'bug':
                                return (
                                    <p className={style.bug}>BUG</p>
                                );
                            case 'electric':
                                return (
                                    <p className={style.electric}>ELECTRIC</p>
                                );
                            case 'ground':
                                return (
                                    <p className={style.ground}>GROUND</p>
                                );
                            case 'ghost':
                                return (
                                    <p className={style.ghost}>GHOST</p>
                                );
                            case 'rock':
                                return (
                                    <p className={style.rock}>ROCK</p>
                                );
                            case 'fighting':
                                return (
                                    <p className={style.fighting}>FIGHTING</p>
                                );
                            case 'fairy':
                                return (
                                    <p className={style.fairy}>FAIRY</p>
                                );
                            case 'psychic':
                                return (
                                    <p className={style.psychic}>PSYCHIC</p>
                                );
                            case 'steel':
                                return (
                                    <p className={style.steel}>STEEL</p>
                                );
                            case 'ice':
                                return (
                                    <p className={style.ice}>ICE</p>
                                );
                            case 'dark':
                                return (
                                    <p className={style.dark}>DARK</p>
                                );
                            case 'dragon':
                                return (
                                    <p className={style.dragon}>DRAGON</p>
                                );
                            case 'unknown':
                                return (
                                    <p className={style.unknown}>??????</p>
                                )
                            default:
                                break;
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Card;