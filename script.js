const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    buttonn.addEventListener('click', function(){
        const atual = document.querySelector('.sim')
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo')

        atual.classList.remove('ativo')
        document.getElement(proximoPasso).classList.add('sim');
    })
})const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    buttonn.addEventListener('click', function(){
        const atual = document.querySelector('.sim')
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo')

        atual.classList.remove('ativo')
        document.getElement(proximoPasso).classList.add('sim');
    })
})