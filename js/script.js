const formulario = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById ( 'nome' ).value;
    let  email = document.getElementById ( 'email' ).value;
    let dados = {
        nome,
        email,
    }
    let conveerterDados = JSON.stringify(dados);

    localStorage.setItem('lead', conveerterDados)

    let content = document.getElementById('content')

    let cadastrado = `<p> E-mail cadastrado com sucesso! </p>`
    content.innerHTML = cadastrado
})