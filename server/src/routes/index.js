import Router from '@koa/router'
import exempleRoutes from '#components/exemple/exemple-routes.js'
import animeRoutes from '#components/anime/anime-routes.js'
import personnageRoutes from '#components/personnage/personnage-routes.js'

const API_V1_ROUTER = new Router({ prefix: '/api/v1' })

API_V1_ROUTER.use('/exemples', exempleRoutes.routes(), exempleRoutes.allowedMethods())
API_V1_ROUTER.use('/animes', animeRoutes.routes(), animeRoutes.allowedMethods())
API_V1_ROUTER.use('/personnage', personnageRoutes.routes(), personnageRoutes.allowedMethods())

export { API_V1_ROUTER }