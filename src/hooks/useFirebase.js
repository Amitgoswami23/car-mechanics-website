import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true)

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result => {
            setUsers(result.user)
        })
        .finally(()=> setIsLoading(false)) 
    }

    //objerved user stat changed

    useEffect( ()=> {
       const unSuscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUsers(user);
            }else{
                setUsers({ });
            }

            setIsLoading(false);
        });

        return () => unSuscribed
    },[])

    //end objerbed user stat changed

    //logout functionality

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{  })
        .finally(()=> setIsLoading(false))
    }

    //end logout functionality

    return {
        users,
        isLoading,
        signInUsingGoogle,
        logOut,
    }
}

export default useFirebase