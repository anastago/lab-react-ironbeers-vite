import React from "react"
import { Link } from "react-router-dom"
import home from "../assets/home-icon.png"

function Navbar() {
  const styles = {
    link: {
      margin: "20px",
    },
  }
  return (
    <nav
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "lightblue",
      }}
    >
      <Link style={styles.link} to={"/"}>
        {" "}
        <img src={home} style={{ margin: "auto" }}></img>
      </Link>
    </nav>
  )
}

export default Navbar
