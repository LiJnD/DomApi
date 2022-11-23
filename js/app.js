const productosFinal = document.querySelector('.productosSPaceFinal');

function fechtSpace(id) {
    fetch(`https://finalspaceapi.com/api/v0/${id}/`)
        .then(res => res, json())
        .then(data => console.log(data));
}

function fechtSpaces(number) {
    for (let i = 1; i <= number; i++) {
        fechtSpace(i);
    }
}

function creadorSpace(SpaceFinal) {
    const card = document.createElement('div');
    card.classList.add('space-block');

    const speaceContainer = document.createElement('div');
    speaceContainer.classList.add('img-container');
    
    const space = document.createElement('div');
    space.src = SpaceFinal.img_url
    
}