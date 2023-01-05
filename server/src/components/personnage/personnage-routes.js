import Router from '@koa/router'
import * as personnageControllers from '#components/personnage/personnage-controllers.js'

const personnage = new Router()

personnage.get('/', personnageControllers.index)
personnage.post('/', personnageControllers.create)

export default personnage