import { useState,useEffect } from "react";

const useCustomFetch = (url) => {
    // const [blogs,setBlog] = useState(null);
    const [datas,setDatas] = useState(null);
    const [isFetchPending,setIsFetchPending] = useState(true);
    const [isError, setisError] = useState(null);

    useEffect(() => {
        setTimeout(
            () => {
                fetch(url)
                .then(responses =>{
                    console.log(responses);
                    if(!responses.ok){
                        throw Error('Type Error: Could not fetch data from resources!' )
                    }  
                    return responses.json();
                })
                .then(fetchedData => {
                   console.log(fetchedData);
                   setDatas(fetchedData);
                   setIsFetchPending(false);
                   setisError(null);
                })
                .catch(
                    err => {
                        setisError(err.message)
                        setIsFetchPending(false)
                        console.log(err.message);
                    }
                )
            },2000
        );
    },[url]);
    
    return (datas,isFetchPending,isError);
}
 
export default useCustomFetch;