import st from './MainNavigation.module.css';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorite-context';
import classes from './MainNavigation.module.css';

export const MainNavigation = () => {

    const favoriteCtx = useContext( FavoritesContext );

    return (
        <>
            <header className={ st.header }>
                <h1 className={ st.h1 }>React Meetups</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All Meetups</Link>
                        </li>
                        <li>
                            <Link to="/new-meetup">New Meetup</Link>
                        </li>
                        <li>
                            <Link to="/favorites">
                                <span className={ classes.badge }>{ favoriteCtx.totalFavorites }</span>
                                Favorites
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};