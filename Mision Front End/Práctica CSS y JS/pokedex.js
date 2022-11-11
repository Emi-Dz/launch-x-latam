const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    })
    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;
        let pokeTip = data.types;
        let name = data.name;
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        pokeTipo(pokeTip);
        pokeNombre(name);
        console.log(pokeImg);
    }

}
const pokeNombre = (name)=>{
    const pokeNombre = document.getElementById("name");
    const pokeName = name;
    pokeNombre.innerHTML = pokeName;
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (abilities) =>{
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map(item => item.ability.name);
    pokeAbilities.innerHTML= "Habilidades: "+ abilitiesName;
}
const pokeTipo = (types) => {
    const pokeTipo = document.getElementById("types");
    const pokeTipoName = types.map(item => item.type.name);
    pokeTipo.innerHTML= "Tipo: "+ pokeTipoName;
}

