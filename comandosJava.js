document.addEventListener("DOMContentLoaded", inserir)
let tamanho = 2;

        function inserir(){
			div = document.createElement("div");
			div.style.fontSize = `${tamanho}em`;
			div.innerHTML = `<button onclick="aumentatitulo()">+</button>
            <button onclick="diminuititulo()">-</button>
			`;
			document.body.prepend(div)
		}

        function atualizatamanho() {
            const h1 = document.querySelector("h1");
            h1.style.fontSize = `${tamanho}em`;
        }
        function aumentatitulo() {
			if (tamanho < 5) {
				tamanho += 0.5;
				atualizatamanho();
			}
        }
        function diminuititulo() {
            if (tamanho > 1) {
                tamanho -= 0.5;
                atualizatamanho();
            }
        }
