import ApplyPolicy from "../model/applyPolicy";

export async function applyPolicy(req, res) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: "Form data not provided...!" })
        ApplyPolicy.create(formData, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({ data })
    }
}

export async function getAppliedPolicyData(req, res) {
    try {
        const policies = await ApplyPolicy.find({});
        if (!policies) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(policies);
    } catch (error) {
        res.status(404).json({ error: "Error while Fetching Data" })
    }
}