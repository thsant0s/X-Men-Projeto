/* forEach = para cada
*/


const personagensAll = document.querySelectorAll(".personagem");
 personagensAll.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {

if (window.innerWidth < 450) {
    window.scrollTo({top:0, behavior:"smooth"});
}

       const personagemSelecionado = document.querySelector(".selecionado");
          personagemSelecionado.classList.remove("selecionado")
            personagem.classList.add("selecionado");
  
  
const personagemGrande = document.querySelector(".personagem-grande");
  const idPersonagem = personagem.attributes.id.value;
    personagemGrande.src = `./img/imagens/card-${idPersonagem}.png`;

const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
        
const decricaoPersonagem = document.getElementById("descricao-personagem");
  decricaoPersonagem.innerText = personagem.getAttribute("data-description");

})
})