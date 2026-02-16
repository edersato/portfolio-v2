<template>
  <div class="steps-container">
    <div class="modal fade" ref="detailsModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title-show">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedStep">
              <h5 class="modal-title-show">{{ selectedStep.title }}</h5>
              <h6 class="modal-title-period">Período: {{ selectedStep.period }}</h6>
              <p>{{ selectedStep.description }}</p>
              <ul v-if="selectedStep.activities" class="list-group">
                <li v-for="(activity, index) in selectedStep.activities" :key="index" class="list-group-item">
                  {{ activity }}
                </li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="steps-wrapper">
      <div class="steps-progress-bar">
        <div 
          class="steps-progress" 
          :style="{ width: progressWidth }"
        ></div>
      </div>

      <div class="steps">
        <div 
          v-for="(step, index) in steps" 
          :key="step.id"
          class="step-item"
        >
          <div 
            class="step-indicator"
            @click="handleStepClick(index)"
            @mouseenter="showTooltip(index, $event)"
            @mouseleave="hideTooltip"
          >
            <span class="step-number">{{ index + 1 }}</span>
          </div>

          <div class="step-label">
            <small>{{ step.label }}</small>
          </div>

          <div 
            v-if="activeTooltip === index"
            ref="tooltip"
            class="step-tooltip"
            :style="tooltipStyle"
            @click="openStepDetails(index)"
          >
            {{ step.tooltip || `Empresa ${index + 1}` }}
            <div class="tooltip-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
  name: 'StepsComponent',
  props: {
    steps: {
      type: Array,
      required: true,
      default: () => []
    },
    activeStep: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      localActiveStep: this.activeStep,
      activeTooltip: null,
      tooltipStyle: {},
      selectedStep: null,
      detailsModal: null
    }
  },
  computed: {
    progressWidth() {
      if (this.steps.length <= 1) return '0%'
      const progress = (this.localActiveStep / (this.steps.length - 1)) * 100
      return `${progress}%`
    },
    modalTitle() {
      return this.selectedStep ? this.selectedStep.tooltip : 'Detalhes'
    }
  },
  watch: {
    activeStep(newVal) {
      this.localActiveStep = newVal
    }
  },
  mounted() {
    const modalElement = this.$refs.detailsModal
    this.detailsModal = new Modal(modalElement)
  },
  methods: {

    handleStepClick(index) {
      this.openStepDetails(index)
      this.$emit('step-click', index)
    },
    showTooltip(index, event) {
      this.activeTooltip = index
      
      const element = event.target
      const rect = element.getBoundingClientRect()
      
      this.tooltipStyle = {
        top: `${rect.top - 50}px`,
        left: `${rect.left + rect.width / 2}px`,
        transform: 'translateX(-50%)'
      }
    },
    hideTooltip() {
      this.activeTooltip = null
    },
    openStepDetails(index) {
      if (index < this.steps.length) {
        this.selectedStep = this.steps[index]
        this.detailsModal.show()
      }
    },
    closeModal() {
      this.detailsModal.hide()
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss" />