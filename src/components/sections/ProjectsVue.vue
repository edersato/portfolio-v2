<template>
  <div id="projects">
    <h1 class="m-5">Projetos</h1>
    <h4 class="m-5">
      Conheça meus projetos pessoais, onde aplico o conhecimento adquirido em
      prática
    </h4>
    <section class="projectArea">
      <div class="projectDiv">
        <img src="../../assets/projectsImg/radio_browser.png" alt="" />
        <div class="explanation">
          <h4 class="mb-4">Radio Browser</h4>
          <h6 class="mb-5">
            Aplicação de rádios funcional com player, consumindo uma API de rádios global
          </h6>
          <a class="btn btnDetails" href="https://radio-browservue.vercel.app/" target="_blank">{{details}}</a>
        </div>
      </div>
      <div class="projectDiv">
        <img src="../../assets/projectsImg/climapp.png" alt="" />
        <div class="explanation">
          <h4 class="mb-4">Weather App</h4>
          <h6 class="mb-5">
            Aplicação de clima construida em Vue consumindo a API da
            OpenWeatherAPI
          </h6>
          <a class="btn btnDetails" href="https://vue-weather-apply.vercel.app/" target="_blank">{{details}}</a>
        </div>
      </div>

      <div class="projectDiv">
        <img src="../../assets/projectsImg/pokedex.png" alt="" />
        <div class="explanation">
          <h4 class="mb-4">Pokedex</h4>
          <h6 class="mb-5">
            Pokedex completa construida em Vue consumindo a API da PokeAPI
          </h6>
          <a class="btn btnDetails" href="https://pokevuedex.vercel.app/" target="_blank">{{details}}</a>
        </div>
      </div>

      <div class="projectDiv">
        <img src="../../assets/projectsImg/hipsta.png" alt="" />
        <div class="explanation">
          <h4 class="mb-4">Jogo Web - Hipsta</h4>
          <h6 class="mb-5">
            Jogo Endless Runner construido durante a Imersão GameDev da Alura
          </h6>
          <a class="btn btnDetails" href="https://editor.p5js.org/Eder_Sato/full/SYVpVFLIz" target="_blank">{{details}}</a>
        </div>
      </div>
      
      <div class="projectDiv">
        <img src="../../assets/projectsImg/wordguess.png" alt="" />
        <div class="explanation">
          <h4 class="mb-4">Jogo Web - Word Guesser</h4>
          <h6 class="mb-5">
            Jogo de adivinhar palavras realizado como primeiro projeto do curso de React da <b>"Hora de Codar"</b>
          </h6>
          <a class="btn btnDetails" href="https://aprendendo-react-theta.vercel.app/" target="_blank">{{details}}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: "Detalhes",
    }
  }
};
</script>

<style lang="scss" scoped>
.projectArea {
  display: flex;
  flex-direction: column;
  margin: 0 1.5em;

  .projectDiv {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3rem;

      @media (min-width: 320px) and (max-width: 920px) {
        flex-direction: column;
        padding: 0;
      }

    img {
      width: 30%;

      @media (min-width: 320px) and (max-width: 920px) {
        width: 50%;      
      }
    }

    .btnDetails {
      background-color: #5ebcfa;
      transition: .8s ease-in;

      &:hover {
        transition: .8s ease-out;
        background-color: white;
      }
    }

    .explanation {
      padding: 2rem;

      h6 {
        color: white;
        font-weight: 400;
      }
    }
  }
}
</style>