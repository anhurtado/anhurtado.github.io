// Request
const portfolioRequest = new XMLHttpRequest();
portfolioRequest.open('GET', './json/portfolio.json', true);

// Callback
portfolioRequest.onload = function() {
  if (portfolioRequest.status >= 200 && portfolioRequest.status < 400) {
    // Conversion to JSON
    const data = JSON.parse(portfolioRequest.responseText);

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
  } else {
    console.log('Error al cargar el archivo JSON');
  }
};

// Error handler
portfolioRequest.onerror = function() {
  console.log('Error al intentar conectarse con el archivo JSON');
};

// Call request
portfolioRequest.send();