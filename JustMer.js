import React from "react";

const JustMer = () => {
 const openLinkedIn = () => {
    // Replace 'https://www.linkedin.com/in/your_username' with your LinkedIn profile URL
    window.open("https://www.linkedin.com/in/meryem-cevriye-kahya-37590629b");
  };
  return (
    <section className="JustMer">
      <h1 className="biggest">hi, this is meryem</h1>
      <p className="JustMer-text">
        Hello, I am Meryem.
      </p>
      <div className="buttons">
       <button className="linkedin-button" onClick={openLinkedIn}>
          LinkedIn Link
        </button>
      </div>
    </section>
  );
};

export default JustMer;
