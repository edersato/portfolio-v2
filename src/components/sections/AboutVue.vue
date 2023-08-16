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
          Sou <b>Desenvolvedor Front End</b> com 2 anos de experiência com foco
          em <b>webdesign</b>, onde aplico todo meu conhecimento para extrair o
          melhor do produto que estou desenvolvendo. <br />
          Confira na seção de <b>Projetos</b> mais detalhes.
        </p>

        <p>
          Atualmente, estou finalizando a graduação em
          <b>Análise e Desenvolvimento de Sistemas</b> pela Estácio.
        </p>

        <p>
          Além dos conhecimentos de programação, tenho habilidades e experiência
          em <b>ferramentas de edição</b> de imagem e vídeo, derivado de anos de
          trabalho em agência de <b>Publicidade e Marketing</b>.
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
  grid-template-columns: 2fr 1fr;
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