export async function getDisciplineItem() {
    const res = await fetch(`${process.env.BASE_URL}/api/item`);
    const items = await res.json();
    return items;
}


// const res = await axios.get('http//localhost:3000/api/item')//LLamada a API local que contiene la info de las especialidades
// return res   