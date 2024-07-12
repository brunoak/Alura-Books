let btn = document.querySelectorAll('.btn');

btn.forEach(botao => botao.addEventListener('click', ()=>{
    aplicaFilter(botao.value);
}))

function aplicaFilter(categoria){
    let filtro = categoria == 'disponivel'? LivroDisponivel() : filtroPorCategoria(categoria)
    console.table(filtro)
    exibirLivros(filtro);
    if(categoria == 'disponivel'){
        let soma = calculaTotal(livrosComDesconto);
        console.log(soma)
        exibirValorTotal(soma);
    }
    
}

function exibirValorTotal(somatoria) {
    
    valorTotal.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${somatoria}</span></p>
        </div>
    `;
}

function filtroPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function LivroDisponivel() {
    return livrosComDesconto.filter(livros => livros.quantidade > 0);
}

