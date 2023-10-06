// Request
const indexRequest = new XMLHttpRequest();
indexRequest.open('GET', './json/index.json', true);

// Callback
indexRequest.onload = function() {
  if (indexRequest.status >= 200 && indexRequest.status < 400) {
    // Conversion to JSON
    const data = JSON.parse(indexRequest.responseText);

    // Networks elements
    let networkElements = '';
    for (const item of data.networks) {
      networkElements += `<a href="${item.url}" target="_blank"><img src="./images/${item.icon}" alt="${item.alt} title="${item.alt}" title="${item.alt}"></a>`;
    }
    document.getElementById('networks').innerHTML = networkElements;

    // Links elements
    let linkElements = '';
    for (const item of data.links) {
      linkElements += `<a href="${item.url}" target="${item.target}"><p>${item.title}</p></a>`;
    }
    document.getElementById('links').innerHTML = linkElements;
  } else {
    console.log('Error al cargar el archivo JSON');
  }
};

// Error handler
indexRequest.onerror = function() {
  console.log('Error al intentar conectarse con el archivo JSON');
};

// Call request
indexRequest.send();