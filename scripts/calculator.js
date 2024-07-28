window.addEventListener("load", main)

function main() {
	document.getElementById("buttonPlus").addEventListener("click", function () { calculation("+") }) // équivalent à "() => calcul("+")"
	document.getElementById("buttonMinus").addEventListener("click", () => calculation("-"))
	document.getElementById("buttonTimes").addEventListener("click", () => calculation("*"))
	document.getElementById("buttonDivide").addEventListener("click", () => calculation("/"))
}

function getValue(valueId) {
	const value = document.getElementById(valueId).value // string
	if (isNaN(value) || value === "") // si la valeur saisie par l'utilisateur est incorrecte
		return null
	else
		return Number(value)
}

function calculation(operation) {
	const value1 = getValue("value1")
	const value2 = getValue("value2")
	if (value1 !== null && value2 !== null) { // si les deux valeurs saisies sont correctes
		switch (operation) {
			case "+":
				showResult(value1 + value2)
				break
			case "-":
				showResult(value1 - value2)
				break
			case "*":
				showResult(value1 * value2)
				break
			case "/":
				if (value2 !== 0) // si le dénominateur est différent de 0
					showResult(value1 / value2)
				else
					showResult("Division par 0 impossible !")
				break
		}
	}
	else
		showResult("Valeur(s) saisie(s) incorrecte(s) !")
}

function showResult(result) {
	document.getElementById("result").innerText = "Result : " + result
}
