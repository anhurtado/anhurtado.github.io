const fnLoaded = async () => {
  // Request
  const response = await fetch('./json/index.json');
  const data = await response.json();

  // Networks elements
  let networkElements = '';
  for (const item of data.networks) {
    networkElements += `
      <a href="${item.url}" target="_blank">
        <img src="./images/${item.icon}" alt="${item.alt}" title="${item.alt}">
      </a>
    `;
  }
  document.getElementById('networks').innerHTML = networkElements;

  // Links elements
  let linkElements = '';
  for (const item of data.links) {
    linkElements += `
      <a href="${item.url}" target="${item.target}">
        <p>${item.title}</p>
      </a>
    `;
  }
  document.getElementById('links').innerHTML = linkElements;
};
document.addEventListener('DOMContentLoaded', fnLoaded);