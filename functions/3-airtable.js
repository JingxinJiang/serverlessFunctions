require('dotenv').config()
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appPWztW4c8BeYf3Y')
  .table('products')

exports.handler = async (event,context)=>{
    try {
        const {records} = await airtable.list();
        const products=records.map((product)=>{
            const {id}=product;
            const {name, image, price}=product.fields;
            const url=image[0].url;
            return {id, name, url, price}
        })
        return{
        // headers: {'Access-Control-Allow-Origin':'*'},  //very important access other project access the api data
        statusCode:200,
        body:JSON.stringify(products),
        }
    } catch (error) {
         return{
        statusCode:500,
        body:'Server Error',
        }
    }
    
}