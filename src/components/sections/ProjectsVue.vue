<template>
  <div id="projects">
    <h1 class="m-5">Projetos</h1>
    <h4 class="m-5">
      Conheça meus projetos pessoais, onde aplico o conhecimento adquirido em
      prática
    </h4>
    <section class="projectArea">
      <div class="projectDiv">
        <img src="../../assets/projectsImg/climapp.png" alt="" />
        <div class="explanation">
          <h4 class="mb-4">Weather App</h4>
          <h6 class="mb-5">
            Aplicação de clima construida em Vue consumindo a API da
            OpenWeatherAPI
          </h6>
          <button class="btn btn-secondary">Detalhes</button>
        </div>
      </div>

      <div class="projectDiv">
        <img src="../../assets/projectsImg/pokedex.png" alt="" />
        <div class="explanation">
          <h4 class="mb-4">Pokedex</h4>
          <h6 class="mb-5">
            Pokedex completa construida em Vue consumindo a API da PokeAPI
          </h6>
          <button class="btn btn-secondary">Detalhes</button>
        </div>
      </div>

      <div class="projectDiv">
        <img src="../../assets/projectsImg/hipsta.png" alt="" />
        <div class="explanation">
          <h4 class="mb-4">Jogo Web - Hipsta</h4>
          <h6 class="mb-5">
            Jogo Endless Runner construido durante a Imersão GameDev da Alura
          </h6>
          <button class="btn btn-secondary">Detalhes</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.projectArea {
  display: flex;
  flex-direction: column;
  margin: 0 1.5em;

  .projectDiv {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3rem;

      @media (min-width: 320px) and (max-width: 920px) {
        flex-direction: column;
        padding: 0;
      }

    img {
      width: 50%;
      margin: 0 auto;

      @media (min-width: 320px) and (max-width: 920px) {
        width: 70%;      
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