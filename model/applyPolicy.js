
import { Schema, models, model } from 'mongoose'

const policySchema = new Schema({
    farmerId: Schema.Types.ObjectId,
    policyId: Schema.Types.ObjectId,
    cropName: String,
    isApproved: Boolean,
    isApplied: Boolean,
})

const ApplyPolicy = models.appp || model('appp', policySchema)

export default ApplyPolicy;
