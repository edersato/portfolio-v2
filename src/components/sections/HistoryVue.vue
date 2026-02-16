<template>
  <div id="history">
    <h1 class="mt-5">Histórico Profissional</h1>
    
    <StepsComponent 
      :steps="professionalSteps"
      :active-step="activeStep"
      @step-click="onStepClick"
    />
  </div>
</template>

<script>
import StepsComponent from '../shared/Stepper/index.vue'

export default {
  name: 'App',
  components: {
    StepsComponent
  },
  data() {
    return {
      activeStep: 0,
      professionalSteps: [
        {
          id: 1,
          label: 'Masterview (2019-2021)',
          title: 'Designer Gráfico / UI',
          tooltip: 'MasterView Soluções e Serviços em Tecnologia',
          period: 'Julho 2019 – Abril 2021',
          description: 'Atuei com criação visual e suporte ao desenvolvimento de sistemas, focando em usabilidade e experiência do usuário.',
          activities: [
            'Criação e renovação de identidade visual de materiais institucionais',
            'Apoio ao desenvolvimento de sistemas com foco em UX/UI',
            'Organização visual e usabilidade de interfaces'
          ]
        },
        {
          id: 2,
          label: 'MTW (2021-2023)',
          title: 'Desenvolvedor Full Stack Júnior',
          tooltip: 'MTW Soluções e Serviços em Tecnologia',
          period: 'Maio 2021 – Julho 2023',
          description: 'Desenvolvimento full stack com foco em front-end (Vue.js/React) e back-end (C#/.NET/SQL).',
          activities: [
            'Desenvolvimento front-end com Vue.js e React',
            'Integração com APIs e manutenção de soluções .NET',
            'Suporte a integradores e testes de estabilidade'
          ]
        },
        {
          id: 3,
          label: 'Castilho Engenharia (2023-2025)',
          title: 'Desenvolvedor de Sistemas',
          tooltip: 'Castilho Engenharia e Empreendimentos S/A',
          period: 'Outubro 2023 – Fevereiro 2025',
          description: 'Otimização e automação de processos internos com foco em performance e qualidade do código.',
          activities: [
            'Otimização e automação de processos corporativos',
            'Manutenção e evolução de sistemas C#, .NET e SQL',
            'Suporte técnico interno e melhorias de performance'
          ]
        },
        {
          id: 4,
          label: 'Explicaê (2025 – Atual)',
          title: 'Desenvolvedor de Software',
          tooltip: 'Explicaê',
          period: 'Março 2025 – Presente',
          description: 'Desenvolvimento front-end com Vue.js, TypeScript e Vuetify, garantindo qualidade e experiência do usuário.',
          activities: [
            'Desenvolvimento e manutenção de aplicações Vue.js/Vuetify',
            'Evolução de componentes e implementação de funcionalidades',
            'Testes de usabilidade e garantia de qualidade do código'
          ]
        }
      ]
    }
  },
  methods: {
    onStepClick(index) {
      console.log('Step clicado:', index)
    }
  }
}
</script>