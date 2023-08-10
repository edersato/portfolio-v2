<template>
  <div id="contact">
    <h1 class="mb-5">Contato</h1>

    <div class="inputForm">
      <label for="">Nome</label>
      <input type="text" placeholder="Seu Nome" />
    </div>

    <div class="inputForm">
      <label for="">Email</label>
      <input type="email" placeholder="Seu Email" />
    </div>

    <div class="inputForm">
      <label for="">Mensagem</label>
      <textarea
        name=""
        id=""
        placeholder="Escreva sua mensagem.."
        cols="25"
        rows="8"
      ></textarea>
    </div>

    <div class="btnArea">
      <button type="submit" class="btn">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#contact {
  padding: 3em;
}

.inputForm {
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  padding: 1rem 0;

  label {
    color: white;
    font-size: 1.2rem;
    text-align: left;
  }

  input,
  textarea {
    padding: 1.5rem;
    background-color: #4389b8;
    border-radius: 15px 5px 5px 15px;
    transition: 0.5s ease-out;
    color: #d8d8d8;
    margin: 0.5em 0;

    &::placeholder {
      color: white;
      font-size: 1.1rem;
      font-weight: 400;
    }

    &:focus {
      border-radius: 5px 15px 15px 5px;
      transition: 0.5s ease-in;
    }
  }
}

.btnArea {
  display: flex;
  margin: 0 3em;
  justify-content: right;

  button {
    padding: 0.5rem 2rem;
    font-size: 1.2em;
    font-weight: 400;
    background-color: #4389b8;

    &:hover {
      background-color: #2e688f;
      color: white;
      transition: 1s;
    }
  }
}
</style>