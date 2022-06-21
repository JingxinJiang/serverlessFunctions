// exports.handler =  (event,context,cb)=>{  //same with the above
//     cb(null,
//         {statusCode:200,
//             body:'Let us start'
//         })
// }

//domain/.netlify/functions/1-hello    http://localhost:8888/.netlify/functions/1-hello

exports.handler = async (event,context)=>{
    console.log(event)
    console.log(context)
    return{
        statusCode:200,
        body:'Our First Netlify Function'
    }
}

// //body: object how to change it to string
// const person={name:'john'}
// exports.handler = async(event,context)=>{
//     return{                                   //must return statusCode and body
//         statusCode:200,
//         body:JSON.stringify(person)
//     }
// }
