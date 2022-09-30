const primeiroNumero = document.getElementById('primeiroNumero')
const segundoNumero = document.getElementById('segundoNumero')
const span = document.querySelector('span')
const optionSelect = document.querySelector('option')
const btCalcular = document.getElementById('btCalcular')
const selectOption = document.getElementById('selectOption')
const outResult = document.getElementById("outResult")

function calcular(){
    const primeiroNumeroaValue = Number(primeiroNumero.value) 
    const segundoNumeroValue = Number(segundoNumero.value)  
    const selectOptionValue = selectOption.value
    let result = ""
  
    
    switch(selectOptionValue){
        case "1": 
      result = primeiroNumeroaValue * segundoNumeroValue
      outResult.innerHTML = "Seu resultado é: " +  result

        
        break

        case "2":
            result = primeiroNumeroaValue / segundoNumeroValue
            outResult.innerHTML = "Seu resultado é: " +  result
        break

        case "3":
             result = primeiroNumeroaValue + segundoNumeroValue
             outResult.innerHTML = "Seu resultado é: " +  result
        break

        case "4": result = primeiroNumeroaValue - segundoNumeroValue
        outResult.innerHTML = "Seu resultado é: " +  result
        break
        default:
           outResult.innerHTML = "algo deu errado, tente novamente!"
    }

  
}


btCalcular.addEventListener('click', calcular)