import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./components/About";
import Portfolio from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function Header() {
  const styles = {
    header: {
      position: "sticky",
      color: "black",
    },
    name: {
        color: "black",
    },
    links: {
        color: "black",
        textDecoration: "none",
    }
  };
  const displayDesktop = () => {
    return (
      <Toolbar >
        {nameLogo}
        <div>
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </Toolbar>
    );
  };
  const nameLogo = (
    <Typography variant="h6" component="h1">
      Ronald Sit
    </Typography>
  );

  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About/>;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio/>;
    }
    if (currentPage === "Resume") {
      return <Resume/>;
    }
    return <Contact/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <AppBar style={styles.header}>{displayDesktop()}</AppBar>
      </header>
      {renderPage()}
    </div>
  );
}
