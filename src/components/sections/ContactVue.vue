<template>
  <div id="contact">
    <h1 class="mb-5">Contato</h1>
    <h4>Entre em contato para mais informações</h4>

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
      <div>
        <a target="_blank" href="http://wa.me/5541999783988">
          <font-awesome-icon icon="fa-brands fa-whatsapp-square" />
        </a>

        <a target="_blank" href="mailto:edersato@gmail.com">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
      </div>
      <button type="submit" class="btn">Enviar</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#contact {
  padding: 3em;

  @media (min-width: 320px) and (max-width: 920px) {
    padding: 1em;
  }
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

    @media (min-width: 320px) and (max-width: 920px) {
      font-size: 1rem;
    }
  }

  input,
  textarea {
    padding: 1rem;
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
  justify-content: space-between;

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

  a {
    color: #5ebcfa;
    padding: 1rem;
    font-size: 3em;
    transition: 1s ease-out;

    &:hover {
      color: white;
      transition: 1s ease-in;
    }
  }
}
</style>