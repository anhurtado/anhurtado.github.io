const fnLoaded = async () => {
  // Request
  const response = await fetch('./json/portfolio.json');
  const data = await response.json();

  // Project elements
  let projectElements = '';
  for (const item of data.projects) {
    projectElements += `
      <section id="item">
        <img src="${item.image}" alt="${item.title}">
        <section id="info">
          <a href="${item.link}" target="_blank"><h2>${item.title}</h2></a>
          <p>${item.subtitle}</p>
          <p>${item.tech}</p>
        </section>
      </section>
    `;
  }
  document.getElementById('projects').innerHTML = projectElements;
};
document.addEventListener('DOMContentLoaded', fnLoaded);