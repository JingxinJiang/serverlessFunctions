const result = document.querySelector('.result')
const fetchData = async ()=>{
    console.log('d')
    
    try {
        const {data}=await axios.get('/api/2-basic-api');
        console.log(data)
        const products=data.map((product)=>{
            const {image:{url},name,price}= product;
            return `<article class="product">
      <img
        src="${url}"
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>`
        }).join('')
        result.innerHTML=products
    } catch (error) {
        result.innerHTML=`<h2>There was an error. please try again later</h2>`
    }
}
fetchData();