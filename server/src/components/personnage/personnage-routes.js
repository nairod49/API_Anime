import Router from '@koa/router'
import * as personnageControllers from '#components/anime/personnage-controllers.js'

const personnage = new Router()

personnage.get('/', personnageControllers.index)
personnage.get('/:id', personnageControllers.id)
personnage.post('/', personnageControllers.create)

export default personnage