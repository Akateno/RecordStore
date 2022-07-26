import EditProfilePic from "./EditProfilePic";
import React, { useState } from "react";

function UserRecord({id, name, artist, release_date, image, onUpdateRecord, userID, onRecordDelete  }) {
  const [isEditing, setIsEditing] = useState(false);
  
  
 
  function handleDeleteClick() {
   
    fetch(`/user_records/${id}`, {
      method: "DELETE",
    });
    onRecordDelete(id);
  }

  return (

    <div className="userCards">
      <div className="userCard" >
         <img key={id} className="cardPic" src={image} alt={name} />
        <h2> Name: {name}</h2>
        <h3>Artist: {artist} </h3>
        <h4>Release Date: {release_date} </h4>
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
            🎵
            </span>
          </button>
        {isEditing ? (
          <EditProfilePic
          id={id}
          names={name}
          artists={artist}
          release_dates={release_date}
          images={image}
          onUpdateRecord={onUpdateRecord}
          />
          ) : (
          <p></p>
        )}
      <button className="deleteButton" onClick={handleDeleteClick}>Remove</button>
      </div>
    </div>
    
  )
}


export default UserRecord;