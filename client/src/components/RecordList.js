import React from "react";
import RecordCard from "./RecordCard";
function RecordList({record, selectedRecord, setId}) {
  
  return (
    <div className="cards" >
      {record.map((rec) => (
        <RecordCard
          id={rec.id}
          key={rec.id}
          name={rec.name}
          artist={rec.artist}
          release_date={rec.release_date}
          image={rec.image}
          userID={rec.user_id}
          setId={setId}
          
         
          selectedRecord={selectedRecord}

          // iD={rec.reviews.id}
          // date={rec.reviews.date}
          // comment={rec.reviews.comment}
          // recordId={rec.reviews.record_id}
        />
      ))}
    </div>
  );
}
export default RecordList;