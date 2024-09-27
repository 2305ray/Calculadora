function inserir(num) {
    let numer = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numer + num
    
}

function clean() {
   //document.getElementById('res').innerHTML=''
    let limpar = document.getElementById('res')
    res.innerHTML= ''

}

function back () {
    let res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}

function calcular() {
    let res = document.getElementById('res').innerHTML
         if (res) {
          document.getElementById('res').innerHTML = eval(res)  
         } else {
            document.getElementById('res').innerHTML = "Nada..."
         }

}

function focusDiv() {
    document.getElementById('res').focus();
}