const items=require('../assets/data')
exports.handler = async (event,context)=>{
    // console.log(event)
    // console.log(context)
    return{
        // headers: {'Access-Control-Allow-Origin':'*'},  //very important access other project access the api data
        statusCode:200,
        body:JSON.stringify(items)
    }
}