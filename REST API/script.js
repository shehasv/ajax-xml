fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      console.log(element.title)
    });
  })