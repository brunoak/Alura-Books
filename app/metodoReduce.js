function calculaTotal(livros){
    return livros.reduce((acc, valorAtual) => acc + valorAtual.preco, 0).toFixed(2)
}