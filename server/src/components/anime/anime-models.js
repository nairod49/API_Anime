import mongoose, { trusted } from "mongoose"

const { Schema } = mongoose

const animeSchema = new Schema({
 //mal_id
    idAPI: {
    type:Number,
    required: true
 },
 //images/jpg/url
    image: {
    type:String
 },
 //title
    title: {
        type:String
    },
//episodes
    nb_episode:{
        type:Number
    },
//Status
    statut:{
        type:String
    },
//aired/from
    date_debut:{
        type:Date
    },
//aired/to
    date_fin:{
        type:Date
    },
//duration
    duree:{
        type:Number
    },
//score
    note:{
        type:Number
    },
//rank
    rank:{
        type:Number
    },
//synopsis
    synopsis:{
        type: String
    },
//streaming/?
    streaming:{
        type:String
    }

})

const Anime = mongoose.model('Anime', animeSchema)


export default Anime