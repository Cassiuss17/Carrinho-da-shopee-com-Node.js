// quais ações meu carrinho pode fazer

// CASOS DE USO
// => adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}

// => calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\n Shopee Cart TOTAL IS:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`🎁 Total: ${result}`)
}

// => deletar todos os itens do carrinho 
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        //splice: serve para cortar uma zona, deletar item
        userCart.splice(index, 1)
    }
    
}


// => remover ou dimuniuir um item
async function removeItem(userCart, item) {
    //1. Encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    //2. Caso não encontre o item
    if(indexFound == -1){
        console.log("item não encontrado")
        return
    }

    //3. item > 1 subtrair um item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
    }

    //4. Caso item = 1 deletar o item
      if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1)
    }

    /*
    async function removeItem(userCart, index) {
    // transforma o indice visual do usuário, para o indice do backend
    const deleteIndex = index -1
    
    //é maior do que zero e se é menor do que o tamanho do carrinho
    if(index => 0 && index < userCart.length){
        userCart.splice(index, 1)
    }
}
        */
}

async function displayCart(userCart) {
    console.log("Shopee cart list:")
    //forEach: percorre por dentro do carrinho
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} / 
            ${item.quantity}x / Subtotal = ${item.subtotal()}`)
    })
    
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}
