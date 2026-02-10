<template>
  <section id="about">
    <h1 class="mt-5">Sobre</h1>
    <h4 class="m-5">
      Um breve resumo de quem sou, o que faço e meus conhecimentos técnicos
    </h4>
    <div class="aboutSection">
      <div>
        <h4 class="mb-3">Quem sou?</h4>
        <p>
          Desenvolvedor Full Stack com 3 anos de experiência em desenvolvimento de sites e aplicações web. <br />
          <br /> Formado em Análise e Desenvolvimento de Sistemas, possui sólida competência em tecnologias front-end (<b>Vue.js, React, Vuetify</b>) e back-end (<b>Node.js, C#, .NET</b>). <br /> 
          <br /> Experiência prática com bancos de dados relacionais (<b>PostgreSQL, MySQL</b>) e NoSQL (<b>MongoDB</b>), além de conhecimentos em infraestrutura de redes e metodologias ágeis (<b>Scrum, Kanban</b>). <br />
        </p>

        <p>
          Com um histórico profissional que inclui posições como Designer Gráfico/UI e Desenvolvedor Full Stack, tem se destacado por sua capacidade de adaptação e aprendizado contínuo. <br />
          <br /> Atualmente, busca novas oportunidades para aplicar seus conhecimentos, contribuir para projetos desafiadores e continuar evoluindo como profissional de tecnologia.
        </p>

        <p>
          Estou aberto a novas <b>oportunidades de trabalho</b> que possa
          contribuir, crescer e aprender mais. Se você possui uma vaga que meus
          conhecimentos agreguem seu time, não hesite de entrar em
          <b>contato</b>.
        </p>
      </div>
      <div>
        <KnowHow />
      </div>
    </div>
  </section>
</template>

<script>
import KnowHow from "./KnowHow.vue";

export default {
  components: {
    KnowHow,
  },
};
</script>

<style lang="scss" scoped>
.aboutSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3em;
  margin: 0 5em;

  @media (min-width: 320px) and (max-width: 920px) {
    display: flex;
    flex-direction: column;
  }

  p {
    color: white;
    text-align: left;
    line-height: 1.2rem;
    font-size: 1.1rem;
    padding: 1em;

    @media (min-width: 320px) and (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.5rem;
      text-align: center;
    }
  }
}
</style>