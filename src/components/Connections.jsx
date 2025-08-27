import axios from "axios"
import React, { useEffect } from "react"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionSlice"

const Connections = () => {
    const connections = useSelector((store) => store.connetions)
    console.log(connections);
    
    const dispatch = useDispatch()
    const fetchConnections = async() => {
        try {
            const res = await axios.get(BASE_URL + "/user/connection", {withCredentials : true});
            // console.log(res.data.data);  
            dispatch(addConnections(res.data.data))
        } catch (err) {
            console.error(err.response.message);    
        }
    }

    useEffect(() => {
        fetchConnections()
    }, [])

    if(!connections) return;

    if(connections.length === 0){
        return <h1>No connection found</h1>;
    } 

  return (
    <div className="text-center mt-4">
        <h1 className="text-bold text-white text-3xl">Connections</h1>
        {
            connections.map((connection) => ( 
                <div  key={connection._id} className="m-4 p-4 rounded-lg bg-base-300 flex w-1/2 mx-auto">
                    <div>
                        <img
                            className="w-20 h-20 rounded-full"
                            alt="photo"
                            src={connection.photoUrl}
                        />
                    </div>
                    <div className="text-left mx-4">
                        <h2 className="font-bold text-xl">{connection.firstName + " " + connection.lastName}</h2>
                        {connection.age && connection.gender && <p>{connection.age + " " + connection.gender}</p>}
                        <p>{connection.about}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Connections