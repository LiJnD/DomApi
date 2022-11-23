const productos = document.getElementById('producto');

document.addEventListener('DOMContentLoaded', e => {ProducFinalSpace()})

const ProducFinalSpace = async () => {
    const res = await fetch('https://finalspaceapi.com/api/v0/character')
    const data = await res.json()
    pintcards(data);
}

const pintcards = data =>{
    console.log(data);
}
