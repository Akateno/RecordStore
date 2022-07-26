
import { useEffect, useState } from "react";
import UserList from "./UserList";
import Search from "./Search";


function Home ({ user }) {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch("/user_records")
      .then((r) => r.json())
      .then(setRecords);
  }, []);

 
const displayedRecords = records.filter((rc) =>
    rc.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleDeleteRecord(id) {
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
  }

  function onUpdateRecord(updateRecord) {
    const updateRecords = records.map((record) => {
      if (record.id === updateRecord.id) {
        return updateRecord;
      } else {
        return record;
      }
    });
    setRecords(updateRecords);
  }


  return (
    <div className="userContainer">
    <h1 className="greeting"> Welcome {user.username}</h1>
    <img className="profilepic" src={user.image_url} alt="profile"/>
    <Search searchTerm={search} onChangeSearch={setSearch} />
    <UserList userRecords={displayedRecords} onRecordDelete={handleDeleteRecord} onUpdateRecord={onUpdateRecord} />
  </div>
  )
}


export default Home;