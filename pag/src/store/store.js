export const getState = ({ getActions, getStore, setStore }) => {

  return {
    store: {
      characters: [],
      planets: [],
      peopleID: {},
      planetsID: {},
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
      getPeopleID: (url) => {
        fetch(url)
          .then(response => response.json())
          .then(data => setStore({ peopleID: data }))
      },
      getPlanets: () => {
        fetch("https://swapi.tech/api/planets/")
          .then((response) => response.json())
          .then(data => setStore({
            planets: data.results,
          }))
          .catch(error => console.log(error))
      },
      getPlanetsID: (url) => {
        fetch(url)
          .then(response => response.json())
          .then(data => setStore({ planetsID: data }))
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


