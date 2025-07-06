import { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Fetching data from DB...");

    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      <h1>List</h1>

      <ul>{myItems && myItems.map((items) => <li key={items}>{items}</li>)}</ul>
    </div>
  );
};

export default List;
