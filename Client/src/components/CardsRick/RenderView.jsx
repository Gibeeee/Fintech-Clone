import css from './CardsRick.module.css'

export const RenderView = ({ search, filteredCards, characters, aliens, filterAliens, humans, filterHumans }) => {

    const renderViewChange = () => {
      if (search?.length > 0) {
          if (filteredCards?.length > 0){
            return (
              filteredCards?.map(character => (
                <div className={css.Character_card} key={character.id}>
                  <img className={css.Character_img} src={character.image} />
                  <div className={css.Character_info}>
                    <h2>{character.name}</h2>
                    {
                      character.status === 'Alive' 
                        ? <h2 id={css.Alive} >{character.status}</h2> 
                        : <h2 id={css.Dead} >{character.status}</h2>}
                    {
                      character.species === 'Human' 
                        ? <h2 id={css.Humans} >{character.species}</h2> 
                        : <h2 id={css.Aliens} >{character.species}</h2>
                    }
                  </div>
                </div>
              ))
            )
          } else {
            return(
              <div><h1>Character not found :(</h1></div>
            )
          }
        } else if (aliens){
          return (
            filterAliens?.map(character =>  (
              <div className={css.Character_card} key={character.id}>
                <img className={css.Character_img} src={character.image} />
                <div className={css.Character_info}>
                  <h2>{character.name}</h2>
                  {
                    character.status === 'Alive' 
                      ? <h2 id={css.Alive} >{character.status}</h2> 
                      : <h2 id={css.Dead} >{character.status}</h2>}
                  {
                    character.species === 'Human' 
                      ? <h2 id={css.Humans} >{character.species}</h2> 
                      : <h2 id={css.Aliens} >{character.species}</h2>
                  }
                </div>
              </div>
            ))
          )
        } else if (humans) {
          return (
            filterHumans?.map(character => (
              <div className={css.Character_card} key={character.id}>
                <img className={css.Character_img} src={character.image} />
                <div className={css.Character_info}>
                  <h2>{character.name}</h2>
                  {
                    character.status === 'Alive' 
                      ? <h2 id={css.Alive} >{character.status}</h2> 
                      : <h2 id={css.Dead} >{character.status}</h2>}
                  {
                    character.species === 'Human' 
                      ? <h2 id={css.Humans} >{character.species}</h2> 
                      : <h2 id={css.Aliens} >{character.species}</h2>
                  }
                </div>
              </div>
            ))
          )
        } else {
          return (
            characters.map(character => (
              <div className={css.Character_card} key={character.id}>
                <img className={css.Character_img} src={character.image} />
                <div className={css.Character_info}>
                  <h2>{character.name}</h2>
                  {
                    character.status === 'Alive' 
                      ? <h2 id={css.Alive} >{character.status}</h2> 
                      : <h2 id={css.Dead} >{character.status}</h2>}
                  {
                    character.species === 'Human' 
                      ? <h2 id={css.Humans} >{character.species}</h2> 
                      : <h2 id={css.Aliens} >{character.species}</h2>
                  }
                </div>
              </div>
          ))
          )
        }
    }
    
    return (
        <>
            {renderViewChange()}
        </>
    )
}