import React, { useState } from "react";
function EditProfilePic({id, names, images, release_dates, artists, onUpdateRecord}) {
    const [name, setName] = useState(names);
    const [artist, setArtist] = useState(artists);
    const [image, setImage] = useState(images);
    const [release_date, setRelease_date]=useState(release_dates)
   

    function handleFormSubmit(e) {
        e.preventDefault();
         fetch(`/user_records/${id}`, {
           method: "PATCH",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
            name,
            artist,
            image, 
            release_date,
           }),
         })
           .then((r) => r.json())
           .then((updateRecord) => onUpdateRecord(updateRecord));
      }




    return (
      <form className="editRecord" onSubmit={handleFormSubmit}>
    <input  type="text" onChange={(e) => setName(e.target.value)} value={name} name="name" placeholder="Doggie" />
    <input  type="text" onChange={(e) => setArtist(e.target.value)} value={artist} name="breed" placeholder="breed" />
    <input  type="url" onChange={(e) => setImage(e.target.value)} value={image} name="image" placeholder="Image URL" />
    <input  type="text" onChange={(e) => setRelease_date(e.target.value)} value={release_date} name="release date" placeholder="release date" />
    <input type="submit" value="Save" />
   </form>
    )
  }
  
  export default EditProfilePic;