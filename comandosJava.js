document.addEventListener("DOMContentLoaded", inserir)
let tamanho = 2;

        function Inser(){
			div = document.createElement("div");
			div.style.fontSize = `${tamanho}em`;
			div.innerHTML = `<button onclick="AumenTitulo()">+</button>
            <button onclick="DimiTitulo()">-</button>
			`;
			document.body.prepend(div)
		}

        function Atualizatamanho() {
            const h1 = document.querySelector("h1");
            h1.style.fontSize = `${tamanho}em`;
        }
        function AumenTitulo() {
			if (tamanho < 5) {
				tamanho += 0.5;
				atualizatamanho();
			}
        }
        function DimiTitulo() {
            if (tamanho > 1) {
                tamanho -= 0.5;
                atualizatamanho();
            }
        }
