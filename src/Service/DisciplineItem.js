export async function getDisciplineItem() {
    const res = await fetch(`http://localhost:3000/api/item`);
    const items = await res.json();
    console.log(items)
    return items;
    
}


// const res = await axios.get('http//localhost:3000/api/item')//LLamada a API local que contiene la info de las especialidades
// return res   