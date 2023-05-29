
export const produtos = async () => {
    // let token = "d5e35518b330cab7beb621b5c68cad84";
    const url = `http://localhost:8080/v1/tomorrows-water/produto`
    const response = await fetch(url)
    const data = await response.json()
    const { produtos } = data;
    return {
        ...data
    }
}