const swaggerjsDoc = require('swagger-jsdoc')


const options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: "DevRel API",
            version: "1.0.0",
            description: "API"
        },
        server:[
            {
                url:"http://localhost:5000"
            }
        ],
        
    },
    apis: ['.src/routers/*.js']
}

const specs = swaggerjsDoc(options)

exports.specs = specs

