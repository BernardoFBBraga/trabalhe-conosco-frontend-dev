![PicPay](https://user-images.githubusercontent.com/1765696/26998603-711fcf30-4d5c-11e7-9281-0d9eb20337ad.png)

# Instruções para rodar o projeto

O projeto foi feito em cima do boilerplate create-react-app que fornece um ambiente react bem configurado.

Após clonar o projeto, navegue até a pasta do projeto e comece instalando as dependências:
### `npm install`
Antes de rodar o projeto, na pasta do projeto, gere o css usando o comando
### `npm run sass`
Para rodar o projeto use o comando
### `npm start`

Para mais detalhes de como usar o create-react-app, veja o arquivo "about-create-react-app.md"


# Descição da tarefa

O teste deve ser feito para Web com layout responsivo e é uma simulação de envio de dinheiro para uma outra pessoa via cartão de crédito.

Você deve fazer um ***Fork*** deste repositório e soliciar um ***Pull Request***, **com seu nome na descrição**, para nossa avaliação.

O seu usuário deverá escolher uma pessoa em uma lista, informar o valor a ser enviado e finalizar o pagamento com o cartão de crédito cadastrado. Se ele não possuir cartão de crédito cadastrado, deverá informar o dados do cartão (número do cartão, data de validade e CVV, além do id do usuário de destino) antes de finalizar o pagamento.

Os cartões devem ser persistidos no armazenamento do navegador para serem usados em pagamentos futuros.

-----
###### Lista de usuários

Para listar as pessoas que podem receber pagamentos, faça uma requisição para o json nessa url: http://careers.picpay.com/tests/mobdev/users

-----

###### Pagamento

Realizar um `POST` para http://careers.picpay.com/tests/mobdev/transaction com os seguintes atributos:
+ ID do usuário que irá receber o pagamento
+ Número do cartão
+ Vencimento do cartão
+ CVV
+ Valor total

``` json
{
   "card_number":"1111111111111111",
   "cvv":789,
   "value":79.9,
   "expiry_date":"01/18",
   "destination_user_id":1002
}
```

## Para fins de teste, o número de cartão 1111111111111111 aprova a transação, qualquer outro recusa.