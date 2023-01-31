export const getState = ({ getActions, getStore, setStore }) => {

  return {
    store: {
      characters: [],
      planets: [],
      favorites: [],
    },
    actions: {
      getCharacters: () => {
        fetch("https://swapi.tech/api/people/")
          .then((response) => response.json())
          .then(data => setStore({
            characters: data.results,
          }))
          .catch(error => console.log(error))
      },
           getPlanets: () => {
        fetch("https://swapi.tech/api/planets/")
          .then((response) => response.json())
          .then(data => setStore({
            planets: data.results,
          }))
          .catch(error => console.log(error))
      },
        addFavorite: newFavorite => {
        const store = getStore();
        console.log(newFavorite);
        const onlyOne = store.favorites.some(item => item === newFavorite)
        if (onlyOne === true) {
          return
        } else {
          setStore(store.favorites.push(newFavorite))
        }
      },
      removeFavorite: index => {
        const { favorites } = getStore();
        favorites.splice(index, 1)
        setStore(...favorites)
      },
    },
  }
}


