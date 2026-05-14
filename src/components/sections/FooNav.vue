<template>
  <footer id="footer">
    <div class="footer-inner">

      <p class="footer-brand">Eder<span>Sato</span></p>

      <p class="footer-copy">
        © {{ currentYear }} — Feito com Vue.js
      </p>

      <div class="footer-social">
        <a href="https://github.com/edersato/" target="_blank" aria-label="GitHub">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/eder-da-rosa-sato/" target="_blank" aria-label="LinkedIn">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a href="https://dev.to/edersato" target="_blank" aria-label="Dev.to">
          <font-awesome-icon icon="fa-solid fa-laptop-code" />
        </a>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  border-top: 1px solid rgba(94, 188, 250, 0.1);
  padding: 1.8rem 4rem;

  @media (max-width: 768px) {
    padding: 1.8rem 2rem;
  }
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
  }
}

.footer-brand {
  font-family: 'Asul', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  letter-spacing: -0.5px;

  span {
    color: #5ebcfa;
  }
}

.footer-copy {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 1px;
  margin: 0;
}

.footer-social {
  display: flex;
  gap: 1rem;

  a {
    color: rgba(255, 255, 255, 0.25);
    font-size: 1rem;
    transition: color 0.25s ease;

    &:hover {
      color: #5ebcfa;
    }
  }
}
</style>