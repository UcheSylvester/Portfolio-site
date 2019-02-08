console.log('working');


fetch('https://api.github.com/users/UcheSylvester/repos')
.then(response => response.json())
.then(projects => {
    for (project of projects) {
        if(!project.fork) {
            console.log(project)
        }
        // console.log(project.fork)
    }
})