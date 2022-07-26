import React, { useState } from "react";
function EditReview ({id, dates, comments, scores, onUpdateReview,}) {
    const [date, setDate] = useState(dates);
    const [comment, setComment] = useState(comments);
    const [score, setScore] = useState(scores);

    function handleFormSubmit(e) {
        e.preventDefault();
        
      console.log("Hello")
         fetch(`/reviews/${id}`, {
           method: "PATCH",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
            date,
            comment,
            score,
           }),
         })
           .then((r) => r.json())
           .then((updatedReviews) => onUpdateReview(updatedReviews));
      }
    return (
    <form className="edit-review" onSubmit={handleFormSubmit}>
        <input  type="text" onChange={(e) => setDate(e.target.value)} value={date} name="date" placeholder="date" />
      <input  type="text" onChange={(e) => setComment(e.target.value)} value={comment} name="comment" placeholder="comment" />
      <input  type="text" onChange={(e) => setScore(e.target.value)} value={score} name="score" placeholder="score" />
      <input type="submit" value="Save" />
    </form>
    )
  }
  
  export default EditReview;