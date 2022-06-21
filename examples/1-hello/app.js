// const { default: axios } = require("axios");  if have it, then it will have error


const result = document.querySelector('.result');
const fetchData = async()=>{
    console.log('fetch data')
    try {
        axios
        // const data = await axios.get('/.netlify/functions/1-hello')   //do not need localhost:8888
        // console.log(data)
        
        const {data} = await axios.get('/api/1-hello') 
        result.textContent=data;

    } catch (error) {
        console.log(error.response)
        result.textContent=error.response.data
    }
}
fetchData()