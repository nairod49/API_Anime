import Anime from '#components/anime/anime-models.js'
import Joi from 'joi'


export async function index (ctx) {
    try {
      const anime = await Anime.find({})
      ctx.ok(anime)
    } catch(e) {
      ctx.badRequest({ message: e.message })
    }
    console.log("Afficheage de tout les anime")
  }

  export async function create (ctx) {
    try {
      console.log(ctx.request.body)
      const animeValidationSchema = Joi.object({
        idAPI: Joi.number(),
        images: Joi.string().required(),
        title: Joi.string().required(),
        episode: Joi.number().required(),
        statut: Joi.string().required(),
        date_debut: Joi.date().required(),
        date_fin: Joi.date(),
        duree: Joi.number().required(),
        note:Joi.number(),
        rank:Joi.number(),
        synopsis:Joi.string(),
        streaming:Joi.string(),
        longitude:Joi.number(),
        latitude:Joi.number()
      })
  
      const { error, value } = animeValidationSchema.validate(ctx.request.body)
      
      if(error) throw new Error(error)
      console.log('No error found continuing the process', value);
      const newanime = await Anime.create(value)
      ctx.ok(newanime)
    } catch(e) {
      ctx.badRequest({ message: e.message })
    }
    console.log("anime ajouter a la base de donnée")
  }

  export async function id (ctx) {
    try {
      if(ctx.params.id.length <= 0) return ctx.notFound({ message: 'Id missing, list ressource not found' })
      const anime = await Anime.findById(ctx.params.id)
      ctx.ok(anime)
    } catch (e) {
      ctx.badRequest({ message: e.message })
    }
    console.log("voici la l'anime avec votre id ")
  }

  export async function update (ctx) {
    try {
      const animeValidationSchema = Joi.object({
        longitude:Joi.number().required(),
        latitude:Joi.number().required()
      })
      const { error, value } = animeValidationSchema.validate(ctx.request.body)
      if(error) throw new Error(error)
      
      const updateAnime = await Anime.findByIdAndUpdate(ctx.params.id, value, { runValidators: true, new: true })
      ctx.ok(updateAnime)
    } catch (e) {
      ctx.badRequest({ message: e.message })
    }
  }

  export async function del (ctx) {
    try {
      await Anime.findByIdAndDelete(ctx.params.id)
      ctx.ok()
    } catch (error) {
      ctx.badRequest({ message: e.message })
    }
  }