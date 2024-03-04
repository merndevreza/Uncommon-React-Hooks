import { useState, useTransition } from "react";

const FindUser = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayUsers, setDisplayUsers] = useState(users);
  //update state without blocking the UI
  const [isPending, startTransition] = useTransition();
  //   Before Optimization: Here a large amount of data is loading. So when a user search something, the handleChange function execute - setSearchTerm and setDisplayUsers functions as batch update. So if a user want to type fast  setSearchTerm function Hang due to setDisplayUsers response late.
  //   const handleChange = (e) => {
  //     const value = e.target.value;
  //     setSearchTerm(value);

  //     const searchedUsers = users.filter((user) => user.name.includes(value));
  //     setDisplayUsers(searchedUsers);
  //   };
  //   After optimization: startTransition tells react to execute it's inner code independently so other functions don't need to wait for this function execution.
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    //mark this state update as a transition.
    startTransition(() => {
      const searchedUsers = users.filter((user) => user.name.includes(value));
      setDisplayUsers(searchedUsers);
    });
  };
  return (
    <div className="w-3/4 mx-auto text-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Type a name"
        className="w-full p-2 bg-green-300 rounded"
      />
      <div className="bg-pink-200 py-3 mt-4">
        {isPending ? <p>Loading...</p> : <p>Total: {displayUsers.length}</p>}
      </div>
      <div>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          displayUsers.length > 0 &&
          displayUsers.map((user, index) => (
            <div
              key={index}
              className="bg-green-100 p-4 w-[300px] inline-block m-3 rounded"
            >
              <img
                className="w-full"
                src={user.avatar}
                alt={`Avatar image for ${user.name}`}
              />
              <h2>{user.name}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FindUser;
