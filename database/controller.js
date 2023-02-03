import Users from "../model/user"

export async function getUsers(req,res){
    try {
        const users = await Users.find({});
        console.log(users);
        if(!users)return res.status(404).json({error:"Data not found"})
        res.status(200).json( users );
    } catch (error) {
        res.status(404).json({error:"Error while Fetching Data"})
    }
}

export async function postUser(req,res){
    try {
        const formData = req.body;
        if(!formData)return res.status(404).json({error:"Form data not provided...!"})
        Users.create(formData,function(err,data){
            return res.status(200).json(data)
          })
    } catch (error) {
        return res.status(404).json({data})
    }
}

export async function getUserByUserName(req,res){
    try {
        const {username , password} = req.body;

        const users = await Users.findOne({username});
        console.log(users)
        if(users && password === users.password){
            console.log('logged in')
            res.status(200).json({users});

        } else{
            return res.status(404).json({error: "not logged in "})
        } 
        if(!users) return res.status(404).json({error: "User Not found"})
    } catch (error) {
        res.status(404).json({ error: "Error ..." });
    }
}