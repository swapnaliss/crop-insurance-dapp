import connectMongo from "../../../database/connection";
import { getUsers } from "../../../database/controller";

export default async function handler(req,res){
    connectMongo()
    // .catch(() => res.status(405).json({ error: "Error in the Connection" }));
    
//types of requests

    const {method} = req

    switch(method){
        case 'GET':
            getUsers(req, res)
            break;

        case 'POST':
            res.status(200).json({method,name:'POST Request'})
            break;
        default:
            res.setHeader('Allow',['GET']);
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}