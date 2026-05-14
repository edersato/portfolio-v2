<template>
  <section id="about">
    <div class="about-header">
      <h1 class="section-title">Quem sou</h1>
    </div>

    <div class="about-grid">

      <!-- Coluna esquerda: texto -->
      <div class="about-text">
        <p class="about-lead">
          QA Engineer com background em desenvolvimento Full Stack.
          Especialista em garantir qualidade de ponta a ponta, de testes unitários a E2E,
          com a vantagem de entender o código por dentro.
        </p>

        <div class="about-bullets">
          <div class="bullet-item">
            <span class="bullet-icon">→</span>
            <p>Testes unitários e E2E em sistemas em produção com Cypress, Jest e Playwright</p>
          </div>
          <div class="bullet-item">
            <span class="bullet-icon">→</span>
            <p>Revisão e otimização de pipelines de build, reduzindo tempo de entrega</p>
          </div>
          <div class="bullet-item">
            <span class="bullet-icon">→</span>
            <p>Identificação de bugs de usabilidade e regressão antes que cheguem ao usuário</p>
          </div>
        </div>

        <div class="about-differencial">
          <p class="differencial-title">Por que meu background dev importa</p>
          <p class="differencial-text">
            Desenvolvi por 4 anos com Vue e C#/.NET. Isso significa que quando encontro
            um bug, entendo a causa para resolver o problema da forma mais rápida.
          </p>
        </div>
      </div>

      <!-- Coluna direita: skills -->
      <div class="about-skills">

        <div class="skill-group">
          <p class="skill-group-label">QA & Testes</p>
          <div class="chips">
            <span class="chip chip--primary">Cypress</span>
            <span class="chip chip--primary">Jest</span>
            <span class="chip chip--primary">Playwright</span>
            <span class="chip chip--primary">Testes E2E</span>
            <span class="chip chip--primary">Testes Unitários</span>
          </div>
        </div>

        <div class="skill-group">
          <p class="skill-group-label">Front-end</p>
          <div class="chips">
            <span class="chip chip--secondary">Vue.js</span>
            <span class="chip chip--secondary">React</span>
            <span class="chip chip--secondary">TypeScript</span>
            <span class="chip chip--secondary">SCSS</span>
            <span class="chip chip--secondary">Vuetify</span>
          </div>
        </div>

        <div class="skill-group">
          <p class="skill-group-label">Back-end & Banco</p>
          <div class="chips">
            <span class="chip chip--secondary">C# / .NET</span>
            <span class="chip chip--secondary">Node.js</span>
            <span class="chip chip--secondary">PostgreSQL</span>
            <span class="chip chip--secondary">MongoDB</span>
          </div>
        </div>

        <div class="skill-group">
          <p class="skill-group-label">Ferramentas</p>
          <div class="chips">
            <span class="chip chip--muted">Git / GitHub</span>
            <span class="chip chip--muted">Figma</span>
            <span class="chip chip--muted">Scrum</span>
            <span class="chip chip--muted">Kanban</span>
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
  padding: 5rem 4rem;

  @media (max-width: 920px) {
    padding: 4rem 2rem;
  }
}

.about-header {
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Asul', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: -1px;
}

/* Grid principal */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

/* Texto */
.about-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-lead {
  font-family: 'Asul', sans-serif;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin: 0;
  border-left: 3px solid #5ebcfa;
  padding-left: 1.2rem;
}

.about-bullets {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bullet-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;

  .bullet-icon {
    font-family: 'Space Mono', monospace;
    color: #5ebcfa;
    font-size: 0.85rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }

  p {
    font-family: 'Asul', sans-serif;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.55;
    margin: 0;
  }
}

.about-differencial {
  background: rgba(94, 188, 250, 0.05);
  border: 1px solid rgba(94, 188, 250, 0.15);
  border-radius: 8px;
  padding: 1.2rem 1.4rem;

  .differencial-title {
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    color: #5ebcfa;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }

  .differencial-text {
    font-family: 'Asul', sans-serif;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin: 0;
  }
}

/* Skills */
.about-skills {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.skill-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.skill-group-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}

.chips {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  padding: 0.28rem 0.75rem;
  border-radius: 4px;
  letter-spacing: 0.3px;
  white-space: nowrap;

  /* QA — destaque total */
  &--primary {
    background: rgba(94, 188, 250, 0.15);
    border: 1px solid rgba(94, 188, 250, 0.4);
    color: #5ebcfa;
  }

  /* Dev — presença mas sem competir */
  &--secondary {
    background: rgba(94, 188, 250, 0.06);
    border: 1px solid rgba(94, 188, 250, 0.18);
    color: rgba(94, 188, 250, 0.65);
  }

  /* Ferramentas — sutil */
  &--muted {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.35);
  }
}
</style>