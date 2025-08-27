import React, { useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setlastName] = useState(user.lastName);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [gender, setGender] = useState(user.gender);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const saveProfile = async() => {
        try {
           const res = await axios.patch(BASE_URL + "/profile/edit", {
                firstName,
                lastName,
                photoUrl,
                age,
                about,
                gender
            }, {withCredentials : true})

            dispatch(addUser(res?.data?.data))
        } catch (err) {
            setError(err.message)
        }
    }
  return (
    <div className="flex justify-center my-10">
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-lg">
                <div className="card-body">
                <h2 className="card-title justify-center">Edit Profile</h2>
                <div className="my-3">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">First Name</legend>
                        <input 
                            type="text"
                            value={firstName} 
                            className="input" 
                            placeholder="Enter your first name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Last Name</legend>
                        <input 
                            type="text" 
                            value={lastName} 
                            className="input"
                            placeholder="Enter your last name"
                            onChange={(e) => setlastName(e.target.value)}
                        />
                    </fieldset> 

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo Url</legend>
                        <input 
                            type="text" 
                            value={photoUrl} 
                            className="input"
                            placeholder="Enter your photo url"
                            onChange={(e) => setPhotoUrl(e.target.value)}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Age</legend>
                        <input 
                            type="text" 
                            value={age} 
                            className="input"
                            placeholder="Enter your age"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </fieldset> 
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Gender</legend>
                        <input 
                            type="text" 
                            value={gender} 
                            className="input"
                            placeholder="Type here"
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </fieldset> 
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">About</legend>
                        <input 
                            type="text" 
                            value={about}
                            className="input"
                            placeholder="Type here"
                            onChange={(e) => setAbout(e.target.value)}
                        />
                    </fieldset> 

                </div>
                <p className="text-red-500 text-center mb-2">{error}</p>
                <div className="card-actions justify-center">
                    <button 
                        className="btn btn-primary"
                        onClick={saveProfile}
                         
                    >Update Profile</button>
                </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center my-10 mx-10">
            <UserCard user={{firstName, lastName, photoUrl, age, about, gender}}/>
        </div>

    </div>
  )
}

export default EditProfile