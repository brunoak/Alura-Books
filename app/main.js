let livros = [];
let livrosComDesconto = [];
const endpointDaApi = `https://guilhermeonrails.github.io/casadocodigo/livros.json`
getBuscaLivrosDaAPI();

async function getBuscaLivrosDaAPI(){
    const res = await fetch(endpointDaApi)
    livros = await res.json()
    livrosComDesconto = aplicarDesconto(livros);
    //aplicaFilter(livros);
    
    exibirLivros(livrosComDesconto);
    
    console.table(livros)
}
