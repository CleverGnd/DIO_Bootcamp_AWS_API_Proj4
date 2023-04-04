# Bootcamp Cloud AWS da DIO - Desafio de Projeto - AWS API
Este repositório foi criado para o versionamento e apresentação do Desafio de Projeto desenvolvido no Bootcamp Cloud AWS da DIO.

Unidade: Segurança, Monitoramento e Suporte na AWS <br>
Professor: [Cassiano Peres](https://github.com/cassianobrexbit/)

<a href="https://www.dio.me/bootcamp/bootcamp-cloud-aws"><img src="https://hermes.digitalinnovation.one/tracks/af22d4a0-463f-48c5-a70c-4961d5e618d0.png" align="center" height="120" width="120" ></a> <a href="https://www.dio.me/"><img src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" align="center" height="120" width="120" ></a> <br>

## Adicionando Segurança em APIs na AWS com Amazon Cognito
Este repositório contém o arquivo "put_item_function.js", que é uma função Lambda desenvolvida durante o Desafio de Projeto da Unidade "Segurança, Monitoramento e Suporte na AWS" do Bootcamp Cloud AWS da DIO.

Durante o desafio, foram utilizados vários serviços da AWS, incluindo Amazon Cognito, DynamoDB, API Gateway e AWS Lambda. Os seguintes passos foram realizados:

    - Criado uma API REST no Amazon API Gateway;
    - Criada tabela no Amazon DynamoDB;
    - Criado funções no AWS Lambda;
    - Integrado o API Gateway com o Lambda backend;
    - Utilizado a ferramenta No POSTMAN para testar a API;
    - Criado um autorizador do Amazon Cognito para uma API REST no Amazon API Gateway.

### put_item_function.js
O arquivo "put_item_function.js" contém a função Lambda que insere um item no DynamoDB. A função é acionada quando uma solicitação HTTP POST é feita à API REST criada no Amazon API Gateway.

A função verifica se o corpo do evento foi fornecido e converte o corpo do evento em um objeto JSON. Em seguida, verifica se o id e o preço foram fornecidos e insere o item no banco de dados. Se ocorrer algum erro, a função retorna um código de status 500 e uma mensagem de erro.

A resposta da função inclui um status code, um corpo de resposta e cabeçalhos que permitem que a API seja acessada de qualquer origem.

## Conclusão
Este projeto do Bootcamp Cloud AWS da DIO ajudou a entender como usar os serviços da AWS para criar uma API REST segura e escalável. O uso do Amazon Cognito para autorização de API, o Amazon DynamoDB para armazenamento de dados e o AWS Lambda para processamento de dados ajudaram a compreender como esses serviços podem ser usados juntos para criar aplicativos modernos e robustos.

## Agradecimentos
Agradecemos à DIO por proporcionar este desafio de projeto e à AWS por disponibilizar os serviços utilizados nesta aplicação.