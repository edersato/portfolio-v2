<template>
  <section id="presentation">
    <div class="hero-grid-lines"></div>
    <div class="hero-accent-line"></div>

    <div class="hero-content">
      <h1 class="hero-name">
        Eder<br />
        <span class="hero-name--accent">Sato</span>
      </h1>

      <p class="hero-role">
        <span class="role-highlight">QA Engineer</span>
        &amp; Full Stack Developer
      </p>

      <div class="hero-stack">
        <span class="stack-tag">Vue.js</span>
        <span class="stack-tag">React</span>
        <span class="stack-tag">Node.js</span>
        <span class="stack-tag">C# / .NET</span>
        <span class="stack-tag">Cypress</span>
        <span class="stack-tag">Jest</span>
        <span class="stack-tag">Playwright</span>
      </div>

      <div class="hero-cta-area">
        <a class="hero-cta" href="#projects">
          Ver projetos
          <font-awesome-icon icon="fa-solid fa-arrow-down" />
        </a>
        <div class="hero-social">
          <PresentationLinks />
        </div>
      </div>
    </div>

    <div class="hero-right">
      <div class="hero-photo-wrapper">
        <img src="../../assets/profilePhoto.jpg" alt="Eder Sato" />
      </div>

      <div class="hero-counter">
        <span class="counter-number">
          {{ String(projectCount).padStart(2, '0') }}
        </span>
        <span class="counter-label">projetos</span>
      </div>
    </div>
  </section>
</template>

<script>
import PresentationLinks from '../shared/PresentationLinks.vue'
import { projectCount } from '@/data/projects.js'

export default {
  components: {
    PresentationLinks,
  },

  data() {
    return {
      projectCount,
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  min-height: 88vh;
  padding: 6rem 4rem 4rem;
  overflow: hidden;
  border: none;

  @media (max-width: 920px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 6rem 2rem 3rem;
    min-height: auto;
    gap: 2.5rem;
  }
}

/* Grid de fundo */
.hero-grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(94, 188, 250, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(94, 188, 250, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

/* Linha vertical esquerda */
.hero-accent-line {
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

/* Lado esquerdo — texto */
.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 540px;

  @media (max-width: 920px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
}

.hero-name {
  font-family: 'Asul', sans-serif;
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.0;
  margin: 0 0 0.6rem;
  letter-spacing: -2px;

  &--accent {
    color: #5ebcfa;
  }
}

.hero-role {
  font-family: 'Asul', sans-serif;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;
  letter-spacing: 0.3px;
  margin-bottom: 1.6rem;

  .role-highlight {
    color: rgba(255, 255, 255, 0.75);
  }
}

.hero-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 2.4rem;
  max-width: 480px;

  @media (max-width: 920px) {
    justify-content: center;
  }
}

.stack-tag {
  background: rgba(94, 188, 250, 0.08);
  border: 1px solid rgba(94, 188, 250, 0.2);
  color: rgba(94, 188, 250, 0.85);
  font-size: 1rem;
  font-family: 'Space Mono', monospace;
  padding: 0.22rem 0.7rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.hero-cta-area {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  flex-wrap: wrap;

  @media (max-width: 920px) {
    justify-content: center;
  }
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #5ebcfa;
  color: #0a0f1a;
  font-family: 'Asul', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.75rem 1.8rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: #ffffff;
    color: #0a0f1a;
  }
}

.hero-social {
  display: flex;
  align-items: center;
}

/* Lado direito — foto + contador */
.hero-right {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
}

.hero-photo-wrapper {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 2px solid rgba(94, 188, 250, 0.25);
  overflow: hidden;
  background: rgba(94, 188, 250, 0.06);

  @media (max-width: 920px) {
    width: 160px;
    height: 160px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(20%);
    transition: filter 0.4s ease;

    &:hover {
      filter: grayscale(0%);
    }
  }
}

.hero-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
}

.counter-number {
  font-family: 'Asul', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: rgba(94, 188, 250, 0.18);
  line-height: 1;
  letter-spacing: -2px;
}

.counter-label {
  font-size: 0.62rem;
  color: rgba(255, 255, 255, 0.2);
  font-family: 'Space Mono', monospace;
  letter-spacing: 3px;
  text-transform: uppercase;
}
</style>