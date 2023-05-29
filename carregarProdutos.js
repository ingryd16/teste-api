'use strict'

import { produtos } from "./app.js"
let dados = await produtos();
console.log(dados)

const cardProduct = (dados) => {

const card = document.createElement('div')
card.classList.add('card')

const name = document.createElement('h2')
name.classList.add('card__name')
name.textContent = dados.razao_social;

const description = document.createElement('p')
description.classList.add('card__biography')
description.textContent = dados.cnpj;

const email = document.createElement('p')
email.classList.add('card__img')
email.textContent = dados.email;

// const price = document.createElement('p')
// price.classList.add('card__price')
// price.textContent = dados.preco;

card.append(name, email, description)

return card

}

export const carregarProduct = async () => {

const container = document.getElementById('container-collections')
const cards =  dados.map(cardProduct)
container.append(...cards)
}

carregarProduct()