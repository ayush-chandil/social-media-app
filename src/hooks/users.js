import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import {db} from "../lib/Firebase";
import {collection, doc,query} from "firebase/firestore";



export function useUser(id){
    const q=query(doc(db,"users",id));
    //console.log(id);
    const [user,isLoading]= useDocumentData(q);
    return {user,isLoading};
}

export function useUsers(){
    const [users,isLoading]=useCollectionData(collection(db,"users"));

    return {users,isLoading};
}