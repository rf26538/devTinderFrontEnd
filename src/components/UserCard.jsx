import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
    // console.log(user);
    const {firstName, lastName, photoUrl, age, gender, about, _id} = user;
    const dispatch = useDispatch();

    const handelSendRequest = async (status, userId) => {
      try {
        const req = await axios.post(`${BASE_URL}/request/send/${status}/${userId}`, {}, {withCredentials : true})
        console.log((req).data.data);
        dispatch(removeFeed(userId))
      } catch (err) {
        console.error(err)
      }
    }

  return (
    <div className="card bg-base-300 w-96 shadow-lg">
      <figure>
        <img
          className="h-full w-full object-cover"
          src={photoUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName }</h2>
        {
          age && gender && <p>{age + "," + gender}</p>
        }
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button 
            className="btn btn-secondary"
            onClick={() => handelSendRequest("ignored", _id)}
          >Ignore</button>
          <button
            className="btn btn-accent"
            onClick={() => handelSendRequest("interested", _id)}
            >Intrested</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard