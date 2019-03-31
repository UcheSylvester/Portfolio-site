
const projectsUrl = 'https://api.github.com/users/uchesylvester/repos';
const projectList = document.querySelector('.fetchedProjects');
const button = document.querySelector('.projectButton');

const projects = [];

fetch(projectsUrl)
	.then(response => response.json())
	.then(data => projects.push(...data));


function displayProjects() {

	const html = projects.map(project => {

		if(project.fork) return;  //stop running if project was forked!
		const name = project.name;
		const url = project.html_url;

		return `
			<li> 
				<a href="${url}" target="_blank" class="fetchedProjects">${name}</a>
			</li>
		`
	}).join('')

	// console.log(html);
	projectList.innerHTML = html;
}

// window.addEventListener('DOMContentLoaded', displayProjects)

button.addEventListener('click', displayProjects)