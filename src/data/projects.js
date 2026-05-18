import climappImg from '../assets/projectsImg/climapp.png'
import climappModalImg from '../assets/projectsImg/climapp_modal.png'
import pokedexImg from '../assets/projectsImg/pokedex.png'
import apuraPressImg from '../assets/projectsImg/apurapress.png'
import apuraPressModalImg from '../assets/projectsImg/apurapress_modal.png'

export const projects = [
  {
    id: 1,
    name: 'ApuraPress',
    description: 'Extensão para Chrome, Firefox e Edge que detecta sites que imitam veículos de imprensa legítimos e alerta o usuário com um modal de bloqueio visual.',
    image: apuraPressImg,
    modalImage: apuraPressModalImg,
    url: 'https://chromewebstore.google.com/detail/fkbcpbggoamcehmaghimalogphpnpcan?utm_source=item-share-cb',
    repo: 'https://github.com/edersato/fact-checker-extension',
    tags: ['Javascript'],
  },
  {
    id: 2,
    name: 'Weather App',
    description: 'Aplicação de clima construída em Vue consumindo a API da OpenWeatherAPI, com busca por cidade e exibição de temperatura, umidade e condições do tempo.',
    image: climappImg,
    modalImage: climappModalImg,
    url: 'https://vue-weather-apply.vercel.app/',
    repo: 'https://github.com/edersato/vue-weather-app',
    tags: ['Vue.js', 'OpenWeather API'],
  },
  {
    id: 3,
    name: 'Pokédex',
    description: 'Pokédex completa construída em Vue consumindo a PokeAPI, com listagem, busca e página de detalhes de cada Pokémon.',
    image: pokedexImg,
    url: 'https://pokevuedex.vercel.app/',
    repo: 'https://github.com/edersato/pokevuedex',
    tags: ['Vue.js', 'PokeAPI'],
  },
]

export const projectCount = projects.length;