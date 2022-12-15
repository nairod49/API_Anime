import Router from '@koa/router'
import * as animeControllers from '#components/anime/anime-controllers.js'

const anime = new Router()

anime.get('/', animeControllers.index)
anime.get('/:id', animeControllers.id)
anime.post('/', animeControllers.create)

export default anime