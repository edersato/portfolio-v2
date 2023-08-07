<template>
  <section>
    <img src="../../assets/profilePhoto.jpg" alt="Eder">
    
    <div>
      <h4>Olá, eu sou</h4>
      <h1>Eder Sato</h1>
      <h3>Desenvolvedor Front End</h3>
      <div class="icons">
        <a href="https://www.linkedin.com/in/eder-da-rosa-sato/">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>

        <a href="https://github.com/edersato/">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>

        <a href="mailto:edersato@gmail.com">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
      </div>
      <button href="#about" type="button" class="btn btn-lg mt-4">Saiba Mais</button>
    </div>
  </section>
</template>

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
    }
  }

  h3 {
    color: white;
    
    @media (min-width: 320px) and (max-width: 768px) {
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

  button {
    background-color: #4591c4;
    border: #4591c4;
    width: 100%;

    &:hover {
      background-color: #2e688f;
      color: white;
      transition: 1s;
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
  }
}
</style>