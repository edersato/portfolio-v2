<template>
    <div class="icons">
      <a target="_blank" href="https://github.com/edersato/">
        <font-awesome-icon icon="fa-brands fa-github" />
      </a>

      <a target="_blank" href="https://www.linkedin.com/in/eder-da-rosa-sato/">
        <font-awesome-icon icon="fa-brands fa-linkedin" />
      </a>

      <a target="_blank" href="mailto:edersato@gmail.com">
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </a>

      <a target="_blank" href="https://dev.to/edersato">
        <font-awesome-icon icon="fa-solid fa-laptop-code" />
      </a>
    </div>
    <button type="submit" class="btn btn-lg mt-4">Saiba Mais</button>
</template>

<style lang="scss" scoped>
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
      padding: 0.8em;
    }
  }
}
</style>