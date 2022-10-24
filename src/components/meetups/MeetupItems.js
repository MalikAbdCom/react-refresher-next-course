import classes from './MeetupItems.module.css';
import {useContext} from 'react';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorite-context';

const MeetupItems = (props) => {

    const favoriteSCtx =  useContext(FavoritesContext);
    const itemIsFavorite = favoriteSCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteSCtx.removeFavorite(props.id);
        }else{
            favoriteSCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    return (
        <li className={ classes.hoverList } >
            <Card>
                <div className={ classes.image }>
                    <img src={ props.image } alt={ props.title }/>
                </div>
                <div className={ classes.content }>
                    <h3>{ props.title }</h3>
                    <address>{ props.address }</address>
                    <p>{ props.description }</p>
                </div>
                <div className={ classes.actions }>
                    <button onClick={toggleFavoriteStatusHandler}>{
                        itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'
                    }</button>
                </div>
            </Card>
        </li>
    )
        ;
};

export default MeetupItems;