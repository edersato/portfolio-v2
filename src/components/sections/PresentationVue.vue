<template>
  <section id="presentation">
    <img src="../../assets/profilePhoto.jpg" alt="Eder">
    
    <div>
      <h4>Olá, eu sou</h4>
      <h1>{{name}}</h1>
      <h3 :class="{ typing: true }">{{ currentPosition }}</h3>
      <PresentationLinks />
      <a class="btnPresentation" href="#about">Saiba Mais</a>
    </div>
  </section>
</template>

<script>
import PresentationLinks from '../shared/PresentationLinks.vue'

export default {
  components: {
    PresentationLinks,
  },

  data() {
    return {
      name: "Eder Sato",
      positions: ['Desenvolvedor FullStack    ', '          UX/UI Designer         '],
      currentPositionIndex: 0,
    }
  },

  computed: {
    currentPosition() {
      return this.positions[this.currentPositionIndex];
    }
  },

  mounted() {
    this.startAlternatingPositions();
  },

  methods: {
    startAlternatingPositions() {
      setInterval(() => {
        this.currentPositionIndex = (this.currentPositionIndex + 1) % this.positions.length;
      }, 4000); 
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;  

  margin: 1em;
  padding: 4em;
  border: 1px solid #4591c4;

  @media (min-width: 320px) and (max-width: 690px) {
    flex-direction: column;
  }

  img {
    clip-path: circle(38%);
    width: 25em;
    margin: 1em;

    @media (min-width: 320px) and (max-width: 920px) {
      width: 17em;
      margin: 0;
    }
  }

  h1 {
    font-size: 4em;
    text-align: right;

    @media (min-width: 320px) and (max-width: 768px) {
      text-align: center;
      font-size: 3em;
    }
  }

  h3 {
    color: white;
    white-space: nowrap;
    border-right: .15em solid #4591c4;
    animation: 2s typing steps(25, end) alternate infinite;
    overflow: hidden;
    text-align: right;

    @keyframes typing {
      from { width: 0 }
      to { width: 102% }
    }

    @media (min-width: 320px) and (max-width: 375px) {
      text-align: center;
      padding-left: 1em;
      border-right: none;
    }
    
    @media (min-width: 376px) and (max-width: 768px) {
      padding: 0 1em;
      text-align: center;
    }
  }

  h4 {
    text-align: right;
    color: white;

    @media (min-width: 320px) and (max-width: 768px) {
      text-align: center;
    }
  }

  .btnPresentation {
    background-color: #4591c4;
    border: 1px solid #4591c4;
    color: black;

    padding: 1rem 8rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    text-decoration: none;
    transition: 1s;

    &:hover {
      background-color: white;
      border-color: white;
      transition: 1s;
    }

    @media (min-width: 320px) and (max-width: 548.58px) {
      padding: 0.8rem;
    }
  }
}

.icons {
  padding-top: 2em;
  font-size: 1.5em;

    @media (min-width: 320px) and (max-width: 768px) {
      display: flex;
    }

  a {
    padding: 1em;
    font-size: 1.2em;
    color: #4591c4;
    transition: 1s;

    &:hover {
      color: white;
      transition: 1s;
    }

    @media (min-width: 320px) and (max-width: 768px) {
      padding: .8em;
    }
  }
}
</style>