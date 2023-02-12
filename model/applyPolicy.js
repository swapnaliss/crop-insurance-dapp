
import { Schema, models, model } from 'mongoose'

const policySchema = new Schema({
    farmerId: Schema.Types.ObjectId,
    policyId: Schema.Types.ObjectId,
    cropName: String,
    isApproved: Boolean,
    isApplied: Boolean,
    status: String
})

const ApplyPolicy = models.apppp || model('apppp', policySchema)

export default ApplyPolicy;
