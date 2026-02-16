<template>
  <div id="contact">
    <h5>Contato</h5>

    <div class="btnArea">
      <div>
        <a target="_blank" href="http://wa.me/5541999783988">
          <font-awesome-icon icon="fa-brands fa-whatsapp-square" />
        </a>

        <a target="_blank" href="mailto:edersato@gmail.com">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#contact {
  @media (min-width: 320px) and (max-width: 920px) {
    padding: 1em;
  }
}

.btnArea {
  display: flex;
  justify-content: space-around;
  margin: 0 3em;

  a {
    color: #5ebcfa;
    padding: 0.5rem;
    font-size: 2em;
    transition: 1s ease-out;

    &:hover {
      color: white;
      transition: 1s ease-in;
    }
  }
}
</style>