import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useOnlineStatus = () =>{
    const [onlineStatus, setonlineStatus] = useState(true);

    //check if online
useEffect(()=>{
    window.addEventListener("offline",()=>{
        setonlineStatus(false)
    });

    window.addEventListener("online",()=>{
        setonlineStatus(true)
    });

},[])

//boolean value

return onlineStatus;

};

export default useOnlineStatus;
