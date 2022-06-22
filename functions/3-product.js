require('dotenv').config()
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appPWztW4c8BeYf3Y')
  .table('products')

exports.handler = async (event,context)=>{
    console.log(event)
    const {id}=event.queryStringParameters;  //<a href="product.html?id=${id}" class="product">
    if(id){
        try {
            const product=await airtable.retrieve(id)
            console.log(product)
            if(product.error){
                return{
                    statusCode:404,
                    body:`No product with id: ${id}`
                }
            }
             return{
        statusCode:200,
        body:JSON.stringify(product)
        }
        } catch (error) {
            return{
                    statusCode:500,
                    body:`Server error`
                }
        }    
    }
    return{
        statusCode:400,
        body:'please provide product id'
    }
}