const result = document.querySelector('.result')
const fetchProducts = async()=>{
    //const {data}=await axios.get ('https://serverlessfunctionsjjx.netlify.app/api/3-airtable')
    try {
        const {data}=await axios.get('/api/3-airtable');
        console.log('data')
        const products=data.map((product)=>{
            const {id, url,name,price}=product;
            return `<a href="product.html?id=${id}" class="product">
            <img src="${url}" alt="${name}"/>
            <div className="info">
            <h5>${name}</h5>
            <h5 class="price">$${price}</h5>
            </div>
            </a>`        
        }).join('')   //must have ('')
        result.innerHTML=products
        console.log(data)
    } catch (error) {
        result.innerHTML='<h4>There was an error</h4>'
    }    
}

fetchProducts ();