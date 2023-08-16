<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#presentation">Eder da Rosa Sato</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#presentation">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projetos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>

nav {
  padding: 5px 30px;

  a {
    font-weight: 400;
    font-size: 1.5rem;
    text-decoration: none;
    transition: .3s ease-in;
    margin: 0 0.5em;
    color: #5ebcfa;

    @media (min-width: 320px) and (max-width: 425px) {
      font-size: 1.2rem;
    }

    &:hover {
      transition: .2s;
      font-weight: bolder;
      letter-spacing: .5px;
      color: #5ebcfa;

      &::before {
        content: "► ";
      }
    }
  }
}

#nav-collapse {
    justify-content: right;
}

</style>