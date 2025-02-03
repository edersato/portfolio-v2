<template>
  <div id="footer" class="bg-dark">
    <div class="footerArea">
      <div>
        <h5>Eder da Rosa Sato</h5>
        <h6>Desenvolvedor Fullstack</h6>
        <hr>
      </div>
      <div class="iconArea">
        <h5>Me encontre também no</h5>
        <div class="icons">
          <a target="_blank" href="https://github.com/edersato/">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/eder-da-rosa-sato/">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>

          <a target="_blank" href="https://dev.to/edersato">
            <font-awesome-icon icon="fa-solid fa-laptop-code" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#footer {
  .footerArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 3rem;
    height: 10rem;

    @media (min-width: 320px) and (max-width: 540px) {
      flex-direction: column;
      padding: 1em;
    }
  }

  .icons {
    font-size: 1.5em;

      @media (min-width: 320px) and (max-width: 768px) {
        display: flex;
      }

    a {
      padding: .5em;
      font-size: 1.2em;
      color: #4591c4;
      transition: 1s;

      &:hover {
        color: white;
        transition: 1s;
      }
    }
  }
}

</style>