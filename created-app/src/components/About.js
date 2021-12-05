import React from "react";
import pic from '../images/me.jpg'

export default function About() {
const styles = {
  img: {
    margin: "25px",
    height: "200px",
    maxWidth: "350px",
    borderRadius: "5px",
  },
  section: {
    display: "flex",
    marginTop: "25px"
  }
}
  
  return (
    <section style={styles.section}>

    <img style={styles.img} id="pic" src={pic} alt="me"/>

    <div>
        <p>Hello! Welcome to my Portfolio built using REACT! This is a new endeavor for me so please excuse my bad styling for now. I hope to improve as time goes. Much of my recent adventures involve climbing. Here's a link to what I have climbed. <a href="https://www.mountainproject.com/user/112515118/ronald-sit" target="blank">🧗</a></p>
    </div>        
    </section>

  );
}