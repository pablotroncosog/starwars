export const getState = ({ getActions, getStore, setStore }) => {

  return {
    store: {
      characters: [],
      planets: [],
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
      }
    },
  }
} 


