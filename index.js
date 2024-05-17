const getStock = async (sku) => {
    const api = 'https://scvlabs.co.uk/api/products.json'
    const response = await fetch(api)
    const data = await response.json()
    const products = data.products.filter(x => x !== null && x.productcode == sku)
    console.log(products[0].availablestock) // dump result
    return products[0].availablestock
}


getStock('AX-D6') // 21 @ 17th May 9:00
