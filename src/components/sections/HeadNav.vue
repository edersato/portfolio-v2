<template>
  <nav :class="{ 'nav--scrolled': scrolled }">
    <div class="nav-inner">

      <!-- Brand -->
      <a class="nav-brand" href="#presentation">
        Eder da Rosa <span>Sato</span>
      </a>

      <!-- Links desktop -->
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.id">
          <a :href="`#${item.id}`" :class="{ active: activeSection === item.id }" @click="closeMobile">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Botão mobile -->
      <button class="nav-toggle" :class="{ open: mobileOpen }" @click="toggleMobile" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Menu mobile -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="nav-mobile">
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <a :href="`#${item.id}`" :class="{ active: activeSection === item.id }" @click="closeMobile">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      mobileOpen: false,
      activeSection: 'presentation',
      navItems: [
        { id: 'presentation', label: 'Home' },
        { id: 'about', label: 'Sobre' },
        { id: 'projects', label: 'Projetos' },
        { id: 'contact', label: 'Contato' },
      ],
      observer: null,
    }
  },

  mounted() {
    // Fundo ao scrollar
    window.addEventListener('scroll', this.onScroll, { passive: true })

    // IntersectionObserver — detecta qual seção está visível
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px', // dispara quando a seção cruza o meio da viewport
        threshold: 0,
      }
    )

    this.navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) this.observer.observe(el)
    })
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    if (this.observer) this.observer.disconnect()
  },

  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 30
    },
    toggleMobile() {
      this.mobileOpen = !this.mobileOpen
    },
    closeMobile() {
      this.mobileOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 4rem;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  border-bottom: 1px solid transparent;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  /* Fundo aparece ao scrollar */
  &.nav--scrolled {
    background: rgba(10, 15, 26, 0.85);
    backdrop-filter: blur(12px);
    border-bottom-color: rgba(94, 188, 250, 0.1);
  }
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

/* Brand */
.nav-brand {
  font-family: 'Asul', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: color 0.2s ease;

  span {
    color: #5ebcfa;
  }

  &:hover {
    color: #ffffff;
  }
}

/* Links desktop */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.35);
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    border: 1px solid transparent;
    transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.75);
    }

    &.active {
      color: #5ebcfa;
      border-color: rgba(94, 188, 250, 0.25);
      background: rgba(94, 188, 250, 0.06);
    }
  }
}

/* Botão hamburguer */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    transform-origin: center;
    transition: transform 0.25s ease, opacity 0.25s ease, background 0.25s ease;
  }

  &.open {
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
      background: #5ebcfa;
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
      background: #5ebcfa;
    }
  }
}

/* Menu mobile */
.nav-mobile {
  background: rgba(10, 15, 26, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(94, 188, 250, 0.1);
  padding: 1rem 0 1.5rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  a {
    display: block;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.4);
    padding: 0.85rem 2rem;
    border-left: 2px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.75);
    }

    &.active {
      color: #5ebcfa;
      border-left-color: #5ebcfa;
    }
  }
}

/* Transição do menu mobile */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>