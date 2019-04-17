let stWrList = document.querySelector('ul');

fetch('https://swapi.co/api/people')
.then(function(response){
    return response.json();
})
/*.then(function(json){
  let people = json.results;
    console.log(people);
})
.then( (json) => {getPeople(json)})


function getPeople(people) {
    console.log('Results:', people);
}*/
.then( json => getPeople(json))

function getPeople(people){
    //console.log(people.results);
    let peeps = people.results;
    for(p of peeps){
        let chara = document.createElement('li');
        chara.innerText = p.name; 
        stWrList.appendChild(chara); 
        //console.log(peeps);
    }
}


//create an li element
//change inner text to p.name
//add the li to ul in html