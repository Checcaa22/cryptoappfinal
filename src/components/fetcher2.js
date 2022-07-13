export default async function fetcher2(URL){
    console.log(URL, "fetcher2")
    
    await fetch(URL)
    .then(response => response.json())
    .then(data => {
        return data.price;
    })
    }