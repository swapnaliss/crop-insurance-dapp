
import {Schema, models, model} from 'mongoose'

const policySchema = new Schema({
    policyName: String,
    period: String,
    coveredAmount: Number,
    premium : Number,
    description: String
})

const Policy = models.policy || model('policy', policySchema)

export default Policy;
