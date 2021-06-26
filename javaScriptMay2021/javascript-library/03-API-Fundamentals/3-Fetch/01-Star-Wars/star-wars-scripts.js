let starWarsPeopleList = document.querySelector('ul')

fetch('https://swapi.dev/api/people')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let people = json.results;

    for(p of people) {
        let lisItem = document.createElement('li');
        lisItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(lisItem);
        }
});