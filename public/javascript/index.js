const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

window.addEventListener('load', () => {

  //MUESTRAME TODAS LAS ENTRADAS DE LA DB

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(response => {
        let container = document.querySelector(".characters-container")

        let newData = ""
        response.data.forEach(character => {
          newData +=
            `<div class="character-info">
          <div class="name">Name:${character.name}</div>
          <div class="occupation">Occupation:${character.occupation}</div>
          <div class="cartoon">Cartoon:${character.cartoon}</div>
          <div class="weapon">Weapon:${character.weapon}</div>
          </div>`
        })
        container.innerHTML = newData
      })
      .catch(err => console.error(error))
  });



  //MUESTRAME EL ELEMENTO POR ID QUE INDICO

  document.getElementById('fetch-one').addEventListener('click', function (event) {



    let id = document.getElementsByName("character-id")[0].value

    charactersAPI
      .getOneRegister(id)
      .then(response => {
        let container = document.querySelector(".character-info")
        console.log(response.data);

        const character = response.data

        container.innerHTML = `<div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>`
      })
      .catch(err => console.error(err))

  });



  document.getElementById('delete-one').addEventListener('click', function (event) {

    let id = document.getElementsByName("character-id")[0].value

    charactersAPI
      .deleteOneRegister(id)
      .then(response => {
        let container = document.querySelector(".character-info")
        console.log(response.data);

      })
      .catch(err => console.error(err))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    let create = document.querySelectorAll("#new-character-form input")

    let character = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      //cartoon = inputs[3].value
      //no tengo ni idea de como pedirle que se ponga verde xD
    }

    // charactersAPI
    //   .createOneRegister(character)
    //   .then(response => {
    //     document.querySelectorAll("#new-character-form input")
    //   })
    //   .catch(err => console.error(err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

});
