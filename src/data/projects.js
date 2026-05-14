import climappImg from '../assets/projectsImg/climapp.png'
import pokedexImg from '../assets/projectsImg/pokedex.png'

export const projects = [
  {
    id: 1,
    name: 'Weather App',
    description: 'Aplicação de clima construída em Vue consumindo a API da OpenWeatherAPI, com busca por cidade e exibição de temperatura, umidade e condições do tempo.',
    image: climappImg,
    url: 'https://vue-weather-apply.vercel.app/',
    repo: 'https://github.com/edersato/vue-weather-app',
    tags: ['Vue.js', 'OpenWeather API'],
  },
  {
    id: 2,
    name: 'Pokédex',
    description: 'Pokédex completa construída em Vue consumindo a PokeAPI, com listagem, busca e página de detalhes de cada Pokémon.',
    image: pokedexImg,
    url: 'https://pokevuedex.vercel.app/',
    repo: 'https://github.com/edersato/pokevuedex',
    tags: ['Vue.js', 'PokeAPI'],
  }
]

export const projectCount = projects.length;