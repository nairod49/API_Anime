import Anime from '#components/anime/anime-model.js'
import Joi from 'joi'


export async function index (ctx) {
    try {
      const anime = await Anime.find({})
      ctx.ok(anime)
    } catch(e) {
      ctx.badRequest({ message: e.message })
    }
  }

  