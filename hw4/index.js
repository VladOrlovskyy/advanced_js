const API = "https://ajax.test-danit.com/api/swapi/films";

const root = document.querySelector("#root");
const charactersArr = [];
const renderFilms = (films) => {

  const filmsList = document.createElement("ul");
  filmsList.classList.add("films");

  films.forEach(({ episodeId, name, openingCrawl, characters }) => {
    charactersArr.push(characters);
    filmsList.innerHTML += `
			<li class="films_card">
				<h2 class="films_name">${name}</h2>
				<p class="films_episode">Episode: ${episodeId}</p>
				<p class="films_descr">
					${openingCrawl}
				</p>
				<div class="actors">
					<div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</li>
		`;
  });

  getCharacters(charactersArr);

  root.append(filmsList);
};

  const renderCharacters = (charactersArr, actors, index) => {
  const actorsList = document.createElement("ul");
  actorsList.classList.add("actors_list");

  charactersArr.forEach(({ name }) => {

    actorsList.innerHTML += `<li class="actors_name">${name}</li>;
  });

  actors[index].innerHTML = `<h2 class="actors_title">Actors:</h2>`;
  actors[index].append(actorsList);
};

const getFilms = (url) => {

  fetch(url)
    .then((response) => response.json())
    .then(renderFilms)
    .catch((err) => alert(err.message));

};

const getCharacters = (charactersArr) => {
  charactersArr.forEach((characters, index) => {

    const promiceArr = [];

    characters.forEach((characterUrl) => {

      promiceArr.push(fetch(characterUrl).then((response) => response.json()));

    });

    Promise.all(promiceArr)

      .then((charactersArr) => {

        const actors = document.querySelectorAll(".actors");
        renderCharacters(charactersArr, actors, index);

      })
      .catch((err) => alert(err.message));

  });
};

getFilms(API);
