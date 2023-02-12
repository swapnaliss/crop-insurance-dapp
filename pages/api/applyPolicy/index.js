import { applyPolicy, getAppliedPolicyData, approveAppliedPolicy } from "../../../database/applyPolicy.controller";

export default async function handler(req, res) {

    const { method } = req

    switch (method) {
        case 'GET':
            getAppliedPolicyData(req, res)
            break;
        case 'POST':
            applyPolicy(req, res);
            break;
        case 'PUT':
            approveAppliedPolicy(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}