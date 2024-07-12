let btn = document.querySelectorAll('.btn');

btn.forEach(botao => botao.addEventListener('click', ()=>{
    aplicaFilter(botao.value);
}))

function aplicaFilter(categoria){
    let filtro = categoria == 'disponivel'? livrosComDesconto.filter(livros => livros.quantidade > 0) : livros.filter(livro => livro.categoria === categoria)
    console.table(filtro)
    exibirLivros(filtro);
}


