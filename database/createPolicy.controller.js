import Policy from "../model/policy";

export async function createPolicy(req,res){
    try {
        const formData = req.body;
        if(!formData)return res.status(404).json({error:"Form data not provided...!"})
        Policy.create(formData,function(err,data){
            return res.status(200).json(data)
          })
    } catch (error) {
        return res.status(404).json({data})
    }
}
