// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(
        function (response) {
            response.json().then(
                function (json) {
                    let container = document.getElementById("container");
                    json.sort((a, b) => b.hoursInSpace - a.hoursInSpace).forEach(elem => {
                        // container.innerHTML +=
                        //     ` <div class="astronaut">
                        //     <div class='bio'>
                        //         <h3>${elem.firstName} ${elem.lastName}</h3>
                        //         <ul>
                        //             <li>Hours in space: ${elem.hoursInSpace}</li>
                        //             <li>Active: ${elem.active}</li>
                        //             <li>Skills: ${elem.skills}</li>
                        //         </ul>
                        //     </div>
                        //     <img class="avatar" src=${elem.picture}>
                        // </div>`
                        const divAstronaut = document.createElement('div');
                        divAstronaut.setAttribute("class", "astronaut");

                        const divBio = document.createElement('div');

                        const h3 = document.createElement('h3');
                        h3.innerHTML = `${elem.firstName} ${elem.lastName}`;

                        const ul = document.createElement('ul');

                        const liHours = document.createElement('li');
                        liHours.innerHTML = `Hours in space: ${elem.hoursInSpace}`;
                        ul.appendChild(liHours);

                        const liActive = document.createElement('li');
                        liActive.innerHTML = `Active: ${elem.active}`;                       
                        if (elem.active) {
                            liActive.setAttribute("class", "bio")
                        }
                        ul.appendChild(liActive);

                        const liSkills = document.createElement('li');
                        liSkills.innerHTML = `Skills: ${elem.skills}`;
                        ul.appendChild(liSkills);

                        divBio.appendChild(h3);
                        divBio.appendChild(ul);
                        
                        divAstronaut.appendChild(divBio);

                        const img = document.createElement('img');
                        img.setAttribute("class", "avatar");
                        img.setAttribute("src",`${elem.picture}` )
                        divAstronaut.appendChild(img);

                        container.appendChild(divAstronaut);
                    });
                    container.innerHTML += `<div>Count of Astronaut : ${json.length}</div>`
                }
            );
        }
    );
});

