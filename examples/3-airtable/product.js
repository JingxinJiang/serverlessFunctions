const result=document.querySelector('.result')
const fetchProducts = async()=>{
    result.innerHTML=`<h2>Loading...</h2>`
    try {
         const id = window.location.search
        // const id="?id=1"
        const {data}=await axios.get(`/api/3-product${id}`);
        console.log(data)
        const {price, image, name,desc}=data.fields;
        console.log(price)
        result.innerHTML=`
        <h1 class="title">${name}</h1>
        <article class="product">
            <img class="product-img"
            src="${image[0].url}"
            alt="${name}"
            />
            <div class="product-info">
            <h5 class="title">${name}</h5>
            <h5 class="price">$${price}</h5>
            <p class="desc">${desc}</p>
            </div>
        </article>
        `
        // const products=data.map((product)=>{
        //     const {id, url,name,price}=product;
        //     return `<a href="product.html?id=${id}" class="product">
        //     <img src="${url}" alt="${name}"/>
        //     <div className="info">
        //     <h5>${name}</h5>
        //     <h5 class="price">$${price}</h5>
        //     </div>
        //     </a>`        
        // }).join('')
        // result.innerHTML=products
        
    } catch (error) {
        result.innerHTML=`<h4>${error.response.data}</h4>`
    }    
}

fetchProducts ();