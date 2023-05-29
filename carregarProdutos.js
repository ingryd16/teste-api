'use strict'

import { produtos } from "./app.JS"
let dados = await produtos();

const cardProduct = (dados) => {

const card = document.createElement('div')
card.classList.add('card')

const name = document.createElement('h2')
name.classList.add('card__name')
name.textContent = dados.nome;

const description = document.createElement('p')
description.classList.add('card__biography')
description.textContent = dados.descricao;

const img = document.createElement('p')
img.classList.add('card__img')
img.textContent = dados.imagem;

const price = document.createElement('p')
price.classList.add('card__price')
price.textContent = dados.preco;

card.append(name, img, description, price)

return card

}

export const carregarObjetos = async () => {

const container = document.getElementById('container-collections')
const cards =  dados.map(cardProduct)
container.append(...cards)
}

carregarObjetos()                                                                       