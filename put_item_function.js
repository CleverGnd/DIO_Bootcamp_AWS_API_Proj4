var AWS = require('aws-sdk');

// Declaração da região do DynamoDB e nome da tabela
const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'sa-east-1'});
const tableName = process.env.TABLE_NAME || 'DioItems';

// Função Lambda para inserir um item no DynamoDB
exports.handler = async (event) => {
    let responseBody = '';
    let statusCode = 0;

    // Verifica se o corpo do evento foi fornecido
    if (!event.body) {
        responseBody = JSON.stringify('O corpo do evento não foi fornecido.');
        return {
            statusCode: 400,
            body: responseBody
        };
    }
    
    // Converte o corpo do evento para um objeto JSON
    let {id, price} = JSON.parse(event.body);
    
    // Verifica se o id e o preço foram fornecidos
    const params = {
        TableName : 'Items',
      /* Item properties will depend on your application concerns */
        Item: {
            id: id,
            price: price
        }
    };
    
    // Insere o item no banco de dados
    try {
        await dynamodb.put(params).promise();
        statusCode = 200;
        responseBody = JSON.stringify('Item inserido com sucesso!');

    // Caso ocorra algum erro, retorna o erro
    } catch (err) {
        statusCode = 500;
        responseBody = JSON.stringify('Ocorreu um erro ao inserir o item no banco de dados.');
    }
    
    // Retorna o status code e o corpo da resposta
    const response = {
        statusCode: statusCode,
        body: responseBody,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    };

    return response;
};
