console.log('working');

// let projectsField = document.querySelector('#portfolio-projects')

// let htmlContent = '';

// fetch('https://api.github.com/users/UcheSylvester/repos')
// .then(response => response.json())
// .then(projects => {
//     for (project of projects) {
//         if(!project.fork) {
//             console.log(project)

//             return htmlContent =  `
//             working
//             `
//         }

//         projectsField.innerHTML = htmlContent;
//         // console.log(project.fork)
//     }
// })

function loadProjects() {
    let projectsField = document.querySelector('#portfolio-projects'),
        htmlContent = '';

    fetch('https://api.github.com/users/UcheSylvester/repos')
    .then(response => response.json())
    .then(projects => {
        for(const project of projects) {
            // console.log(project)
            if(!project.fork) {
                console.log(` name: ${project.name}`)
                return htmlContent = `
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Stars</th>
                        <th>Project Link</th>
                    </thead>
                    <tbody>
                        <tr> ${project.name} </tr>
                    </tbody>
                </table>
                `
            }
        }
        projectsField.insertAdjacentHTML('beforeend', htmlContent)
    })
}

document.addEventListener('DOMContentLoaded', function(e) {
    loadProjects()
})