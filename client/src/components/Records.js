
import React, { useEffect, useState } from "react";
import Search from "./Search";
import RecordList from "./RecordList";


function Records(){
    const [records, setRecords] = useState([])
    const [search, setSearch] = useState("");
    const [id, setId] = useState(null);
  

    useEffect(() => {
        fetch("/records")
          .then((r) => r.json())
          .then((records) => setRecords(records));
      }, []);
     
      //  useEffect(() => {
      //    fetch("/reviews")
      //      .then((r) => r.json())
      //     .then((reviews) => setReviews(reviews));
      //  }, []);

  const selectedRecord = records.find((a) => a.id === id);

    const displayedRecords = records.filter((rec) =>
    rec.name.toLowerCase().includes(search.toLowerCase()));


    // function handleUpdateReview(updatedReview) {
    //   const updatedReviews = records.map((rc) => {
    //     if (rc.id === updatedReview.id) {
    //       return updatedReview;
    //     } else {
    //       return review;
    //     }
    //   });
    //   setRecords(updatedReviews);
    // }

      return (
        <div className="recordcontainer">
          
          <h1  className="recordheader">Browse Records</h1>
          <Search searchTerm={search} onChangeSearch={setSearch} />
          <RecordList record = {displayedRecords} selectedRecord={selectedRecord} setId={setId}/>
          {/* <ReviewList records={records}/> */}
        </div>
      );
}

export default Records;