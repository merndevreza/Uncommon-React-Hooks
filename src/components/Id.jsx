import { useId } from "react";

const Id = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const passwordDescriptionId = useId();
  return (
    <div className="w-[500px] mx-auto my-5 bg-pink-100 p-5 space-y-2 rounded-lg">
      <h1 className="font-lg font-medium ">
        useId is a React Hook for generating unique IDs that can be passed to
        accessibility attributes. <br/><br/>
        - useId should not be used to generate keys in a list.
        <br/><br/>
      </h1>
      <form className="space-y-3">
        <div>
          <label htmlFor={nameId}>Name</label>
          <input id={nameId} type="text" />
        </div>
        <div>
          <label htmlFor={emailId}>Email</label>
          <input id={emailId} type="email" />
        </div>
        <div>
          <label htmlFor={passwordId}>Password</label>
          <input id={passwordId} aria-describedby={passwordDescriptionId} type="password"  />
          <p id={passwordDescriptionId}>Password has to be at least 8 characters</p>
        </div>
        <button className="bg-green-400 px-3 py-1 rounded" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Id;
