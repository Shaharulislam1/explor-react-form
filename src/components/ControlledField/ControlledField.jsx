import React from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventdefault ();
    console.log('submitted')
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="Email" required />
        <br />
        <input type="password" name="" id="" placeholder="Password"  required/>
        <br />
        <input type="submit" value="submit"  />
      </form>
    </div>
  );
};

export default ControlledField;
