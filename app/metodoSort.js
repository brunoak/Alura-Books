let btnSort = document.querySelector("#btnOrdenarPorPreco");

btnSort.addEventListener('click',metodoSort)

function metodoSort(){
    let livrosOrdenados = livrosComDesconto.sort((a,b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}