
import { Schema, models, model } from 'mongoose'

const policySchema = new Schema({
    farmerId: Schema.Types.ObjectId,
    policyId: Schema.Types.ObjectId,
    cropName: String,
    accepted: Boolean,
})

const ApplyPolicy = models.ap || model('ap', policySchema)

export default ApplyPolicy;
