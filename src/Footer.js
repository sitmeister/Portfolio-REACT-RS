import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button"

function Footer() {
  const links = {
    github: `https://github.com/sitmeister`,
    linkedin: `https://www.linkedin.com/in/ronald-sit-09856911`,
  };

  const styles = {
    Container: {
      backgroundColor: "rgb(27,118,210)",
      position: "relative",
      bottom: 0,
      width: "100%",
    },
    links: {
        color: "black",
        textDecoration: "none",
    },
    list: {
        listStyleType: "none",
        display: "flex"
      },
  };

  return (
    <div style={styles.Container}>
      <ul style={styles.list}>
        <li>
          <Button style={styles.links} href="#">mrronsit@gmail.com</Button>
        </li>
        <li>
          <Button
            href={links.github}
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon color="action" />
          </Button>
        </li>
        <li>
          <Button
            href={links.linkedin}
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon color="action" />
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
