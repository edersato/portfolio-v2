<template>
  <div id="footer">
    <div class="footerArea">
      <div>
        <h5>Eder da Rosa Sato</h5>
        <h6>Desenvolvedor Front End</h6>
      </div>
      <div>
        <h5>Me encontre também no</h5>
        <div class="icons">
          <a href="https://github.com/edersato/">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>

          <a href="https://www.linkedin.com/in/eder-da-rosa-sato/">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>

          <a href="https://dev.to/edersato">
            <font-awesome-icon icon="fa-solid fa-laptop-code" />
          </a>

          <a href="https://www.instagram.com/edersato_/">
            <font-awesome-icon icon="fa-brands fa-instagram" />
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
  background-color: #131112;

  .footerArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 3rem;
    height: 10rem;
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