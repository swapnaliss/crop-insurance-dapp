
import {Schema, models, model} from 'mongoose'

const userSchema = new Schema({

    username: String,
    password: String,
    role : String,
    id: String
})

const Users = models.Login || model('Login', userSchema)

export default Users;
