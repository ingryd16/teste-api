'use strict'

export const produtos = async () => {
   
    // let token = "d5e35518b330cab7beb621b5c68cad84";
    const url = `http://localhost:8080/v1/tomorrows-water/patrocinador/2`
    const response = await fetch(url)
    const data = await response.json()
    const { produtos } = data;
    console.log(produtos)
    return {
        ...data
    }
    
    
}