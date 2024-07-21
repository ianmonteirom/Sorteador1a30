function sortearNumero() {

    const numeroSorteado = Math.floor(Math.random() * 30) + 1;
    let num = numeroSorteado;
    console.log(num);

    let res = document.querySelector('#res');
    res.innerHTML = `Seu número da vez é ${num}`;

}
