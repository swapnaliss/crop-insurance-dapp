import connectMongo from "../../../database/connection";
import {getUserByUserName} from "../../../database/controller";

export default async function handler(req,res){
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }));
    
//types of requests

    const {method} = req

    switch(method){
        case 'POST':
            getUserByUserName(req,res);
            break;
        default:
            res.setHeader('Allow',['POST']);
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}