console.log('working....');

function fetchProjects() {
    const projectsUrl = 'https://api.github.com/users/uchesylvester';

    fetch(projectsUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

document.addEventListener('DOMcontentLoaded', function(e) {
    console.log(e)
})