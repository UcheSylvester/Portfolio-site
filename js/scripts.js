// console.log('working....');

// function fetchProjects() {
//     const projectsUrl = 'https://api.github.com/users/uchesylvester/repos';

//     let htmlContent = '';
//     let container = document.createElement('div');

//     fetch(projectsUrl)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(projects) {

//         for (const project of projects) {
//             if(!project.fork) {
//                 console.log(project.name);
//                 htmlContent =  `
//                 <table>
//                     <tr>
//                         <th>Projects Name</th>
//                     </tr>
//                 </table>
//                 `
//             }
//         }
//         // container.appendChild(htmlContent);
//     })

//     portfolio.insertAdjacentHTML('afterbegin', container)
    
// }



// document.addEventListener('DOMContentLoaded', function(e) {
//     fetchProjects()
// });


// // fetchProjects()