<template>
  <section>
    <div>
      <h4>Conhecimentos</h4>
      <div class="skills">
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
        <p>VueJs</p>
        <p>ReactJs</p>
        <p>Angular</p>
        <p>C#</p>
        <p>.NET</p>
        <p>SQL</p>
        <p>Git</p>
        <p>Photoshop</p>
        <p>Illustrator</p>
        <p>InDesign</p>
        <p>Premiere</p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: right;

    @media (min-width: 320px) and (max-width: 768px) {
      justify-content: center;
    }

  p {
    padding: .2rem 1rem;
    margin: 1rem;
    background: #5ebcfa;
    border-radius: 1.8rem;
    color: black;
    font-weight: 400;

    &:hover {
      font-weight: 500;
    }
  }
}

</style>