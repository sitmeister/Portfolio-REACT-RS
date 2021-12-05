import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  const styles = {
    links: {
      color: "black",
      textDecoration: "none",
      // "$:link": {
      //   color:"green"
      // },
      // "$:visited": {
      //   color:"red"
      // },
      // "$:hover": {
      //   color:"hotpink"
      // }
    },
    list: {
      listStyleType: "none",
      display:"flex",
    },
    space: {
      marginRight: "5%"
    }

  };
  return (
    <ul style={styles.list} className="nav nav-tabs">
      <li style={styles.space} className="nav-item">
        <a
          style={styles.links}
          href="#about"
          onClick={() => handlePageChange("About")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li style={styles.space} className="nav-item">
        <a
          style={styles.links}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li style={styles.space} className="nav-item">
        <a
          style={styles.links}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li style={styles.space} className="nav-item">
        <a
          style={styles.links}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
