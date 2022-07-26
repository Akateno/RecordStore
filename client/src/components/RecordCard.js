import { useState } from "react";
import { useHistory } from "react-router";
import Reviews from "./Reviews"


function RecordCard({ id, name, artist, release_date, image, selectedRecord, setId }) {

    const [errors, setErrors] = useState([]);
    
    const [visibleDetails, setVisibleDetails] = useState(false);
    const history = useHistory();
    function handleClick() {
        fetch("/user_records", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            artist,
            image,
            release_date,
          }),
        }).then((r) => {
          if (r.ok) {
            history.push("/");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

      const handleImageClick  = () => {
        setVisibleDetails(!visibleDetails)
    }
    

  return (
   
    <div className="cards">
      <div className="card" onClick={() => setId(id)}>
        <img  onClick={handleImageClick}className="cardPic" src={image} alt={name} />
        { visibleDetails ? <Reviews record={selectedRecord}  /> : []}
        <div className="cardDetails">
          <h2>Name: {name}</h2>
        <h3><em>Artist: {artist}</em> </h3>
        <h4><i>Release Date: {release_date}</i> </h4>
        <button className="addButton" onClick={handleClick}> Add to Library</button>
        </div>
        
      </div>
    </div>
    
  );
}
export default RecordCard;
