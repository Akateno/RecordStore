import React, { useState } from "react";
import EditReviews from "./EditReviews";



function Reviews({ record }) {
    const [isEditing, setIsEditing] = useState(false);
    const [isreviews, setIsreviews] = useState(record.reviews);
    console.log(isreviews)

    function onUpdateReview(updatedReview) {
        const updatedReviews = record.reviews.map((rc) => {
          if (rc.id === updatedReview.id) {
            return updatedReview;
          } else {
            return rc;
          }
        });
        setIsreviews(updatedReviews);
      }
    

  const userItems = record.reviews.map((rc)=>(
    
    <div className="reviewsContainer"key={rc.id}>
      <h4>Comment: {rc.comment}</h4>
       <h5 className="userScore">User Score: <em>{rc.score}</em></h5>
       
       <p> Date Added: {rc.date}</p>
       <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
              Edit Review
            </span>
        </button>
    
      {isEditing ? (
        
        <EditReviews
          id={rc.id}
          comments={rc.comment}
          dates={rc.date}
          score={rc.score}
          onUpdateReview={onUpdateReview}
        />
      ) : (
        <p></p>
      )}
    </div>
  ))


  return (
    // <div className="reviewcard">
    //   <h2> date: {date}</h2>
    //   <h3>comment: {comment} </h3>
    // </div>
    <div>
      
        <div>
            <div className="reviewCard">
            {record ? (
             <div>
              <h3 className="userReviews">User Reviews</h3>
            {userItems}
             </div>
                 ) : (
                <p>
             No Reviews Found
             </p>
                )}
            </div>
        </div>
    </div>
  );
}
export default Reviews;