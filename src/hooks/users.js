import { useDocumentData } from "react-firebase-hooks/firestore";
import {db} from "../lib/Firebase";
import {doc,query} from "firebase/firestore";



export function useUser(id){
    const q=query(doc(db,"users",id));
    //console.log(id);
    const [user,isLoading]= useDocumentData(q);
    return {user,isLoading};
}

