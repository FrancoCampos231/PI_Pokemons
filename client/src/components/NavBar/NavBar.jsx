import style from './NavBar.module.css'

const NavBar = () => {

    return (
        <div>
            <form className={style.search_detail}>
                <input type="text" placeholder="write the name of your pokemon" className={style.search_input}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default NavBar;