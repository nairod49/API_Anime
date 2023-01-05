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

  export async function create (ctx) {
    try {
      console.log(ctx.request.body)
      const animeValidationSchema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        birthdate: Joi.date()
      })
  
      const { error, value } = animeValidationSchema.validate(ctx.request.body)
      if(error) throw new Error(error)
      console.log('No error found continuing the process', value);
      const newanime = await Anime.create(value)
      ctx.ok(newanime)
    } catch(e) {
      ctx.badRequest({ message: e.message })
    }
  }