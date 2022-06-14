import { useState, useEffect } from "react";

function About(props) {
  const [about, setAbout] = useState([]);
  const getAboutData = async () => {
    const response = await fetch(props.URL + "about");
    const data = await response.json();
    setAbout(data);
  };

   useEffect(() => {
     getAboutData();
   });

  const loaded = () => (
    <div>
      <h2>{about?.name}</h2>
      <h2>{about?.email}</h2>
      <img src={about?.headshot} alt="about" />
      <p>{about?.bio} </p>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
