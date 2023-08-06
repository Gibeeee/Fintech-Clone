import React, { useState, useEffect } from 'react'
import css from './CardsRick.module.css'
import { Link } from 'react-router-dom';
import { FilteredSistem } from './FilteredSistem';
import { RenderView } from './RenderView'

export const CardsRick = () => {

    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const [aliens, setAliens] = useState(false);
    const [humans, setHumans] = useState(false);
    const [favorites, setFavorites] = useState(true);
    const [filterAliens, setFilterAliens] = useState([]);
    const [filterHumans, setFilterHumans] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, []);

    const filteredByName = (characters, search) => {
      return characters?.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))
    }

    const handleSearch = ( event ) => {
      setSearch(event.target.value)
    }

    const filteredByHumans = ( characters ) => {
      return characters?.filter( card => card.species.includes('Human') )
    }

    const filteredByAliens = ( characters ) => {
      return characters?.filter( card => card.species.includes('Alien') )
    }

    useEffect(() => {
      if(search) setFilteredCards( filteredByName( characters, search ) )
      setFilterAliens( filteredByAliens( characters ) )
      setFilterHumans( filteredByHumans( characters ) )
      console.log('Aliens are: ', aliens)
     console.log('Humans are: ' ,humans)
    }, [characters, search, aliens, humans])

    const onAlienChange = (aliensValue) => {
      if(humans) {
        setHumans(false)
      }
      setAliens(aliensValue)
    }

    const onHumanChange = (humansValue) => {
      if(aliens) {
        setAliens(false)
      }
      setHumans(humansValue)
    }

    const onFavoritesChange = (favoritesValue) => {
      setFavorites(favoritesValue)
    }

  return (
    <div className={css.Characters}>
      <FilteredSistem onAlienChange={onAlienChange} onHumanChange={onHumanChange} onFavoritesChange={onFavoritesChange}/>
      <nav className={css.Search}>
        <span><h1>Cards - Rick</h1></span>
          <label > Characters : 
            <input 
              type="text"
              placeholder='Find a Character'
              value={search}
              onChange={handleSearch}
            />
        </label>
        <Link to={'/'}>Home</Link>
      </nav>
      <div className={css.Character_container}>
        <RenderView search={search} filteredCards={filteredCards} characters={characters} aliens={aliens} filterAliens={filterAliens} humans={humans} filterHumans={filterHumans} />
      </div>
    </div>
  );
}