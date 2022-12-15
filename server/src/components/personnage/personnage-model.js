import { date, string } from "joi"
import mongoose, { trusted } from "mongoose"

const { Schema } = mongoose

const personnageSchema = new Schema({
    //mal_id
    id:{
        type:String,
        required:true
    },
//images/jpg
    url:{
        type:String
    },
//name
    name:{
        type:String
    },
//about
    about:{
        type:String
    },
//anime/anime/mail_ID
    anime_id:{
        type:String
    },
})

const Personnage = mongoose.model('Personnage', personnageSchema)