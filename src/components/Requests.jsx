import axios from "axios"
import React, { useEffect } from "react"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addRequest } from "../utils/requestSlice"

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async() => {
    const req = await axios.get(BASE_URL + "/user/request/received", {withCredentials : true});
    console.log(req.data.data);
    
    dispatch(addRequest( req.data.data));
  }

  useEffect(() => {
    fetchRequests()
  }, [])

     if(!requests) return;

    if(requests.length === 0){
        return <h1>No connection found</h1>;
    } 

  return (
    <div className="text-center mt-4">
        <h1 className="text-bold text-white text-3xl">Connection Requests</h1>
        {
            requests.map((request) => ( 
                <div  key={request.fromUserId._id} className="justify-between m-4 p-4 rounded-lg bg-base-300 flex w-1/2 mx-auto items-center">
                    <div>
                        <img
                            className="w-20 h-20 rounded-full"
                            alt="photo"
                            src={request.fromUserId.photoUrl}
                        />
                    </div>
                    <div className="text-left mx-4">
                        <h2 className="font-bold text-xl">{request.fromUserId.firstName + " " + request.fromUserId.lastName}</h2>
                        {request.fromUserId.age && request.fromUserId.gender && <p>{request.fromUserId.age + " " + request.fromUserId.gender}</p>}
                        <p>{request.fromUserId.about}</p>
                    </div>
                    <div>
                      <button 
                        className="btn btn-outline btn-primary mx-4"
                      >Accept</button>
                      <button 
                        className="btn btn-outline btn-secondary"
                      >Reject</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Requests