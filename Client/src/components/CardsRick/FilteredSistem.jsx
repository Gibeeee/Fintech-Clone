import { useState } from 'react'
import css from './Filtered.module.css'

export const FilteredSistem = ({ onAlienChange, onHumanChange, onFavoritesChange }) => {

  return (
    <div className={css.Buttons_container}>
        <button className={css.Button_one} onClick={() => onAlienChange( preventAlien => !preventAlien ) }>
          Aliens
        </button>
        <button className={css.Button_two} onClick={() => onFavoritesChange( preventFavorites => !preventFavorites )}>
          Favorites          
        </button>
        <button className={css.Button_three} onClick={() => onHumanChange( preventHuman => !preventHuman ) }>
          Humans
        </button>
    </div>
  )
}
