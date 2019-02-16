console.log('working....');

function fetchProjects() {
    const projectsUrl = 'https://api.github.com/users/uchesylvester/repos';

    let htmlContent = '';
    const portfolio = document.querySelector('#portfolio');

    fetch(projectsUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(projects) {

        for (const project of projects) {
            if(!project.fork) {
                console.log(project.name);
                htmlContent =  `
                ${project.name}
                `
            }
        }
    })

    portfolio.insertAdjacentHTML('afterbegin', htmlContent)
    
}



document.addEventListener('DOMContentLoaded', function(e) {
    fetchProjects()
});

// fetchProjects()