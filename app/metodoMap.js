function aplicarDesconto(livros){
    const desconto = 0.3;
    let descontoLivros = livros.map(x =>{
        return{...x, preco: x.preco - (x.preco * desconto)}
    })
    return descontoLivros
}

