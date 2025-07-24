
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.querySelector('.close');


function openModal(projectId) {
  const projectDetails = getProjectDetails(projectId);
  modalDetails.innerHTML = `
    <h2>${projectDetails.title}</h2>
    <p>${projectDetails.description}</p>
    <a href="${projectDetails.link}" target="_blank">View Project</a>
  `;
  modal.style.display = 'block'; 
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function getProjectDetails(id) {
  const projects = {
    1: {
      title: 'Project 1',
      description: 'This is a detailed description of Project 1. It involves building a web app using JavaScript and React.',
      link: 'https://example.com/project1'
    },
    2: {
      title: 'Project 2',
      description: 'This is a detailed description of Project 2. It involves building a mobile app using Flutter and Firebase.',
      link: 'https://example.com/project2'
    },
    3: {
      title: 'Project 3',
      description: 'This is a detailed description of Project 3. It involves building a design system with Figma and Storybook.',
      link: 'https://example.com/project3'
    }
    // Add more projects as needed
  };
  return projects[id];
}