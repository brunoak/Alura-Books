let livros = [];
const endpointDaApi = `https://guilhermeonrails.github.io/casadocodigo/livros.json`
getBuscaLivrosDaAPI();

async function getBuscaLivrosDaAPI(){
    const res = await fetch(endpointDaApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros);
    //aplicaFilter(livros);
    
    exibirLivros(livrosComDesconto);
    
    console.table(livros)
}
