import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mini Banestes API',
            version: '1.0.0',
            description: 'API de sistema bancário simplificado para o processo seletivo Banestes'
        },
        components: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        },
        servers: [
            { url: 'https://localhost:3001' }
        ]
    },
    apis: ['./src/routes/*.ts']
}

export const swaggerSpec = swaggerJSDoc(options);