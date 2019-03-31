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
			<li class="list-group-item"> 
				<a href="${url}" target="_blank" 
				class="list-group-item">${name}</a>
			</li>
		`
	}).join('');

	// console.dir(projectList)
	button.style.fontFamily = 'lobster';
	button.style.fontSize = '2em'

	if(projectList.childElementCount === 0) {
		console.log('working')
		projectList.innerHTML = html;
		button.innerHTML = 'Hide Projects'
		console.log(projectList.childElementCount)
	} else {
		projectList.innerHTML = '';
		button.innerHTML = 'Show All Projects'
	}

	// projectList.innerHTML = html;

	// console.log(projectList)

}

button.addEventListener('click', displayProjects)