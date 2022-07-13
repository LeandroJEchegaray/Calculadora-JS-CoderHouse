let op, operaciones=0, num1, num2;

function ingresar_numero() {
  num1=prompt("Ingresa el primer numero: ");
  num2=prompt("Ingresa el segundo numero: ");
}

function validar_numero(num1,num2) {
  if ( isNaN(num1) || isNaN(num2) ) { // si es un caracter volver a el menu
    console.log("Retorno al menu");
    alert("No ingresaste un numero valido");
  }
  else {
    return true; // es un numero, devolver verdadero
  }
}

function operacion(num1,num2) { //dependiendo de la opcion seleccionada en el switch es la operacion que se realizara
  let resultado;

  if (op == "1") { // suma
    resultado = ( parseFloat(num1) + parseFloat(num2) )
    if (isNaN(resultado)) {
      alert("La operacion no pudo realizarse") // no se incrementa el contador, volver al menu
    } else {
      alert(num1 + " + " + num2 + " = " + resultado);
      operaciones++; // si la operacion es exitosa el contador se incrementa
    }
  }

  if (op=="2") { // resta
    resultado = ( parseFloat(num1) - parseFloat(num2) )
    if (isNaN(resultado)) {
      alert("La operacion no pudo realizarse")
    } else {
      alert(num1 + " - " + num2 + " = " + resultado);
      operaciones++;
    }
  }

  if (op=="3") { // division
    resultado = ( parseFloat(num1) / parseFloat(num2) )
    if (isNaN(resultado) || num2=="0") {
      alert("La operacion no pudo realizarse")
      if (num2=="0") {
        alert("¡No se puede dividir por 0!")
      }
    } else {
      alert(num1 + " / " + num2 + " = " + resultado);
      operaciones++;
    }
  }

  if (op == "4") { // multiplicacion
    resultado = ( parseFloat(num1) * parseFloat(num2) )
    if (isNaN(resultado)) {
      alert("La operacion no pudo realizarse")
    } else {
      alert(num1 + " x " + num2 + " = " + resultado);
      operaciones++;
    }
  }
}

function realizar_operacion() {
  ingresar_numero();
  let comparador=validar_numero(num1,num2);
  if (comparador==true) { // si son numeros validos realizar operacion
    operacion(num1,num2);
  }
}

do {
  op = prompt("Ingrese la operacion que desea realizar:\n1. Sumar\n2. Restar\n3. Dividir\n4. Multiplicar\n0. Salir\nOperaciones realizadas: " + operaciones);
  switch (op) {
    case "0":
      alert("Puedes presionar 'F5' para reiniciar la calculadora. :)");
      break;

    case "1":
      realizar_operacion();
      break;

    case "2":
      realizar_operacion();
      break;

    case "3":
      realizar_operacion();
      break;

    case "4":
      realizar_operacion();
      break;

    default:
      alert("No ingresaste una opción válida. ¡Vuelve a intentarlo!");
      break;
  }

} while (parseInt(op) != 0); //realizar mientras op -opcion- no sea igual a 0