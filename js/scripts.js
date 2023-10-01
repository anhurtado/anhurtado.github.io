// Request
const request = new XMLHttpRequest();
request.open('GET', './data.json', true);

// Callback
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Conversion to JSON
    const data = JSON.parse(request.responseText);

    // Networks elements
    let networkElements = '';
    for (const item of data.networks) {
      networkElements += `<a href="${item.url}" target="_blank"><img src="./images/${item.icon}" alt="${item.alt}" title="${item.alt}"></a>`;
    }
    document.getElementById('networks').innerHTML = networkElements;

    // Links elements
    let linkElements = '';
    for (const item of data.links) {
      linkElements += `<a href="${item.url}" target="_blank"><p>${item.title}</p></a>`;
    }
    document.getElementById('links').innerHTML = linkElements;
  } else {
    console.log('Error al cargar el archivo JSON');
  }
};

// Error handler
request.onerror = function() {
  console.log('Error al intentar conectarse con el archivo JSON');
};

// Call request
request.send();