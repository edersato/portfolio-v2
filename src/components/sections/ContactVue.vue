<template>
  <section id="contact">
    <div class="contact-grid-lines"></div>
    <div class="contact-accent-line"></div>

    <div class="contact-inner">

      <div class="contact-header">
        <h1 class="section-title">Vamos conversar?</h1>
        <p class="section-lead">
          Aberto a oportunidades de <strong>QA Engineer</strong> e <strong>Full Stack Developer</strong>.
          Escolha o canal que preferir.
        </p>
      </div>

      <div class="contact-body">

        <!-- Canais -->
        <div class="contact-channels">
          <a class="channel-card" href="mailto:edersato@gmail.com" target="_blank">
            <div class="channel-icon">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </div>
            <div class="channel-info">
              <span class="channel-label">E-mail</span>
              <span class="channel-value">edersato@gmail.com</span>
            </div>
            <font-awesome-icon class="channel-arrow" icon="fa-solid fa-arrow-up-right-from-square" />
          </a>

          <a class="channel-card" href="http://wa.me/5541999783988" target="_blank">
            <div class="channel-icon">
              <font-awesome-icon icon="fa-brands fa-whatsapp" />
            </div>
            <div class="channel-info">
              <span class="channel-label">WhatsApp</span>
              <span class="channel-value">Resposta rápida</span>
            </div>
            <font-awesome-icon class="channel-arrow" icon="fa-solid fa-arrow-up-right-from-square" />
          </a>

          <a class="channel-card" href="https://www.linkedin.com/in/eder-da-rosa-sato/" target="_blank">
            <div class="channel-icon">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </div>
            <div class="channel-info">
              <span class="channel-label">LinkedIn</span>
              <span class="channel-value">Histórico profissional</span>
            </div>
            <font-awesome-icon class="channel-arrow" icon="fa-solid fa-arrow-up-right-from-square" />
          </a>

          <a class="channel-card" href="https://github.com/edersato/" target="_blank">
            <div class="channel-icon">
              <font-awesome-icon icon="fa-brands fa-github" />
            </div>
            <div class="channel-info">
              <span class="channel-label">GitHub</span>
              <span class="channel-value">Código e projetos</span>
            </div>
            <font-awesome-icon class="channel-arrow" icon="fa-solid fa-arrow-up-right-from-square" />
          </a>
        </div>

        <!-- Download CV -->
        <div class="contact-cv">
          <div class="cv-card">
            <div class="cv-top">
              <p class="cv-eyebrow">Currículo</p>
              <h3 class="cv-title">Eder da Rosa Sato</h3>
              <p class="cv-subtitle">QA Engineer · Full Stack Developer</p>

            </div>

            <a class="cv-download" href="/cv.pdf" download="Eder_Sato_CV.pdf">
              <font-awesome-icon icon="fa-solid fa-download" />
              Baixar CV em PDF
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  padding: 5rem 4rem;
  overflow: hidden;

  @media (max-width: 920px) {
    padding: 4rem 2rem;
  }
}

/* Grid de fundo — consistente com o hero */
.contact-grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(94, 188, 250, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(94, 188, 250, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

.contact-accent-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom,
      transparent,
      #5ebcfa 25%,
      #5ebcfa 75%,
      transparent);
  z-index: 0;
}

.contact-inner {
  position: relative;
  z-index: 1;
}

/* Header */
.contact-header {
  margin-bottom: 3rem;
}

.section-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: #5ebcfa;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

.section-title {
  font-family: 'Asul', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.75rem;
  letter-spacing: -1px;
}

.section-lead {
  font-family: 'Asul', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
  line-height: 1.6;

  strong {
    color: rgba(255, 255, 255, 0.75);
    font-weight: 700;
  }
}

/* Body: canais + cv */
.contact-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Canais */
.contact-channels {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.channel-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: rgba(94, 188, 250, 0.04);
  border: 1px solid rgba(94, 188, 250, 0.12);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: rgba(94, 188, 250, 0.09);
    border-color: rgba(94, 188, 250, 0.3);

    .channel-arrow {
      opacity: 1;
      transform: translate(2px, -2px);
    }
  }
}

.channel-icon {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 6px;
  background: rgba(94, 188, 250, 0.1);
  border: 1px solid rgba(94, 188, 250, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #5ebcfa;
  flex-shrink: 0;
}

.channel-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;

  .channel-label {
    font-family: 'Asul', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.85);
  }

  .channel-value {
    font-family: 'Space Mono', monospace;
    font-size: 0.68rem;
    color: rgba(255, 255, 255, 0.35);
    letter-spacing: 0.3px;
  }
}

.channel-arrow {
  font-size: 0.75rem;
  color: rgba(94, 188, 250, 0.5);
  opacity: 0;
  transition: opacity 0.25s ease, transform 0.25s ease;
  flex-shrink: 0;
}

/* CV card */
.contact-cv {
  position: sticky;
  top: 6rem;
}

.cv-card {
  background: rgba(94, 188, 250, 0.04);
  border: 1px solid rgba(94, 188, 250, 0.18);
  border-radius: 12px;
  overflow: hidden;
}

.cv-top {
  padding: 1.8rem 1.8rem 1.4rem;
  border-bottom: 1px solid rgba(94, 188, 250, 0.1);
}

.cv-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  color: #5ebcfa;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 0.6rem;
}

.cv-title {
  font-family: 'Asul', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.2rem;
}

.cv-subtitle {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.5px;
  margin-bottom: 1.2rem;
}

.cv-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.cv-tag {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  padding: 0.2rem 0.65rem;
  border-radius: 4px;
  background: rgba(94, 188, 250, 0.08);
  border: 1px solid rgba(94, 188, 250, 0.2);
  color: rgba(94, 188, 250, 0.7);
}

.cv-download {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem 1.8rem;
  background: #5ebcfa;
  color: #0a0f1a;
  font-family: 'Asul', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: background 0.25s ease;

  &:hover {
    background: #ffffff;
  }
}
</style>