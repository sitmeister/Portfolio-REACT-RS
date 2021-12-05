import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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

      },
  };

  return (
    <div style={styles.Container}>
      <ul style={styles.list}>
        <li>
          <a style={styles.links} href="#">mrronsit@gmail.com</a>
        </li>
        <li>
          <a
            href={links.github}
            without
            rel="noopener noreferrer"
            target="_blank"
            className="animate__animated animate__bounce"
          >
            <GitHubIcon color="action" />
          </a>
        </li>
        <li>
          <a
            href={links.linkedin}
            without
            rel="noopener noreferrer"
            target="_blank"
            className="animate__animated animate__bounce"
          >
            <LinkedInIcon color="action" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
