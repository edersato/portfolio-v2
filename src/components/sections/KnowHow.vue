<template>
  <section>
    <div>
      <h4>Conhecimentos</h4>
      <div class="skills">
        <p>
          <font-awesome-icon icon="fa-brands fa-html5" />
          <span>Html</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-css3-alt" />
          <span>CSS</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-square-js" />
          <span>Javascript</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-vuejs" />
          <span>VueJs</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-react" />
          <span>ReactJs</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-angular" />
          <span>AngularJs</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-php" />
          <span>PhP</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-python" />
          <span>Pyhton</span>
        </p>
        <p>
          <i class="devicon-csharp-line-wordmark"></i>
          <span>C#</span>
        </p>
        <p>
          <i class="devicon-dotnetcore-plain"></i>
          <span>.NET Core</span>
        </p>
        <p>
          <i class="devicon-microsoftsqlserver-plain-wordmark"></i>
          <span>SQL Server</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-github" />
          <span>GitHub</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-brands fa-figma" />
          <span>Figma</span>
        </p>
        <p>
          <i class="devicon-photoshop-line"></i>
          <span>Photoshop</span>
        </p>
        <p>
          <i class="devicon-illustrator-line"></i>
          <span>Illustrator</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(3, 33%);

  @media (min-width: 320px) and (max-width: 700px) {
    grid-template-columns: repeat(2, 50%);
  }

  p {
    font-size: 3em;
    padding: 1rem;
    margin: 0.8rem;
    color: #5ebcfa;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 320px) and (max-width: 400px) {
      font-size: 4em;
    }

    span {
      font-size: 0.3em;
      padding: 1rem;
      
      &:hover {
        font-weight: 500;
      }

      @media(min-width: 320px) and (max-width: 400px) {
        font-size: 0.2em;
      }
    }
  }

  i {
    color: #5ebcfa;
    font-size: 1.2em;

    @media(min-width: 320px) and (max-width: 400px) {
      font-size: 1em;
    }
  }
}
</style>