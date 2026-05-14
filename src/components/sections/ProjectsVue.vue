<template>
  <div id="projects">
    <h1 class="section-title">Projetos</h1>
    <h4 class="section-subtitle">
      Conheça meus projetos pessoais, onde aplico o conhecimento adquirido em prática
    </h4>

    <div class="swiper-wrapper-outer">
      <swiper :modules="modules" :slides-per-view="3" :space-between="30" :centered-slides="true" :effect="'coverflow'"
        :coverflow-effect="{
          rotate: 40,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }" :navigation="true" :pagination="{ clickable: true }" :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }" class="projects-swiper" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(project, index) in projects" :key="project.id" class="project-slide">
          <div class="project-card" @click="openModal(project)">
            <div class="card-image-wrapper">
              <img :src="project.image" :alt="project.name" />
              <div class="card-overlay">
                <span class="overlay-hint">Ver detalhes</span>
              </div>
            </div>
            <div class="card-info">
              <h4>{{ project.name }}</h4>
              <div class="tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Modal -->
    <Transition name="modal-fade">
      <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-box">
          <button class="modal-close" @click="closeModal">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>

          <div class="modal-image">
            <img :src="selectedProject.image" :alt="selectedProject.name" />
          </div>

          <div class="modal-content">
            <h2>{{ selectedProject.name }}</h2>
            <p class="modal-description">{{ selectedProject.description }}</p>

            <div class="tags modal-tags">
              <span v-for="tag in selectedProject.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>

            <div class="modal-actions">
              <a class="btn-modal btn-live" :href="selectedProject.url" target="_blank">
                <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
                Ver projeto
              </a>
              <a class="btn-modal btn-repo" :href="selectedProject.repo" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" />
                Repositório
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { projects } from '@/data/projects.js'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      modules: [EffectCoverflow, Navigation, Pagination],
      selectedProject: null,
      projects,
    }
  },

  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper
    },
    onSlideChange() { },
    openModal(project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedProject = null
      document.body.style.overflow = ''
    },
  },
}
</script>

<style lang="scss" scoped>
#projects {
  padding: 2rem 0 4rem;

  .section-title {
    margin: 2rem 1.5rem 0.5rem;
  }

  .section-subtitle {
    margin: 0 1.5rem 2rem;
  }
}

.swiper-wrapper-outer {
  padding: 2rem 0 3rem;
}

.projects-swiper {
  width: 100%;
  padding-bottom: 3rem !important;
}

/* Swiper navigation arrows */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #5ebcfa;

  &::after {
    font-size: 1.4rem;
  }
}

:deep(.swiper-pagination-bullet) {
  background: #5ebcfa;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

/* Card */
.project-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #1a2332;
  border: 1px solid rgba(94, 188, 250, 0.15);
  transition: border-color 0.3s ease;
  user-select: none;

  &:hover {
    border-color: rgba(94, 188, 250, 0.5);

    .card-overlay {
      opacity: 1;
    }

    img {
      transform: scale(1.04);
    }
  }
}

.card-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(69, 145, 196, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .overlay-hint {
      color: white;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  }
}

.card-info {
  padding: 1rem 1.2rem 1.2rem;

  h4 {
    color: white;
    margin-bottom: 0.6rem;
    font-size: 1rem;
  }
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  background: rgba(94, 188, 250, 0.12);
  color: #5ebcfa;
  border: 1px solid rgba(94, 188, 250, 0.3);
  border-radius: 20px;
  padding: 0.2rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* Modal backdrop */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

/* Modal box */
.modal-box {
  background: #0f1923;
  border: 1px solid rgba(94, 188, 250, 0.25);
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    max-height: 480px;
  }
}

.modal-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
}

.modal-image {
  flex-shrink: 0;

  @media (min-width: 640px) {
    width: 280px;
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
    display: block;

    @media (min-width: 640px) {
      height: 100%;
      border-radius: 16px 0 0 16px;
    }
  }
}

.modal-content {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  h2 {
    color: white;
    font-size: 1.4rem;
    margin: 0;
  }

  .modal-description {
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.95rem;
    line-height: 1.55;
    margin: 0;
  }
}

.modal-tags {
  margin-top: 0.2rem;
}

.modal-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.btn-modal {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;
}

.btn-live {
  background: #4591c4;
  color: white;

  &:hover {
    background: #5ebcfa;
    color: #0f1923;
  }
}

.btn-repo {
  background: transparent;
  color: #5ebcfa;
  border: 1px solid rgba(94, 188, 250, 0.4);

  &:hover {
    background: rgba(94, 188, 250, 0.1);
    border-color: #5ebcfa;
  }
}

/* Modal transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;

  .modal-box {
    transition: transform 0.25s ease, opacity 0.25s ease;
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;

  .modal-box {
    transform: scale(0.95);
    opacity: 0;
  }
}
</style>