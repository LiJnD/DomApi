const ProducFinalSpace = async () => {

    try {
        fetch('https://finalspaceapi.com/api/v0/character')
            .then((res) => res.json())
            .then((data) => setPersonaje(data))

    } catch (error) {
        console.log(error)
    }
}
ProducFinalSpace();