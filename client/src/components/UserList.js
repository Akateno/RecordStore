import React from "react";
import UserRecords from "./UserRecords";
function UserList({userRecords,onRecordDelete, onUpdateRecord}) {


    
  return (

    <div className="userCard">

      <div className="userCards">
      {userRecords.map((rec) => (
        <UserRecords
        id={rec.id}
        key={rec.id}
        name={rec.name}
        artist={rec.artist}
        release_date={rec.release_date}
        image={rec.image}
        userID={rec.user_id}
        onRecordDelete={onRecordDelete}
        onUpdateRecord={onUpdateRecord}
        />
      ))}
    </div>
    </div>
    
  );
}
export default UserList;
