import Personnage from '#components/personnage/personnage-model.js'
import Joi from 'joi'


export async function index (ctx) {
    try {
      const personnage = await Personnage.find({})
      ctx.ok(personnage)
    } catch(e) {
      ctx.badRequest({ message: e.message })
    }
    console.log("Affichage des perosnnages")
  }

  export async function create (ctx) {
    try {
      console.log(ctx.request.body)
      const personnageValidationSchema = Joi.object({
        id: Joi.string().required(),
        url: Joi.string().required(),
        name: Joi.string().required(),
        about: Joi.string().required( ),
        anime_id: Joi.string().required()
      })
  
      const { error, value } = personnageValidationSchema.validate(ctx.request.body)
      if(error) throw new Error(error)
      console.log('No error found continuing the process', value);
      const newpersonnage = await Personnage.create(value)
      ctx.ok(newpersonnage)
    } catch(e) {
      ctx.badRequest({ message: e.message })
    }
  }