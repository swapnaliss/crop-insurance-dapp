import connectMongo from "../../../database/connection";
import { getUsers , postUser} from "../../../database/controller";

export default async function handler(req,res){
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }));
    
//types of requests

    const {method} = req

    switch(method){
        case 'GET':
            getUsers(req, res)
            break;

        case 'POST':
            postUser(req,res);
            break;
        default:
            res.setHeader('Allow',['GET']);
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}