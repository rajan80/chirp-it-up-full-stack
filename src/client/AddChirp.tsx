import React, { useState, useEffect } from "react";

const AddChirp: React.FC<{}> = () => {
  const [user, setUser] = useState<string>("");
  const [post, setPost] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch POST request to /api/chirps
  };

  return (
    <section className="row justify-content-center mt-5">
      <div className="col-md-12">
        <form className=" form-group">
          <input
            placeholder="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="from-control"
          />

          <input
            placeholder="Post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="from-control"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="btn btn-primary mt"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddChirp;
