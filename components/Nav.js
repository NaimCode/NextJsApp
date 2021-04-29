import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/navBar/AppBar.module.css";
import "../node_modules/bulma/css/bulma.css";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { fab } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

const Nav = (props) => {
  console.log(props.setAnime);
  const fetch = props.setAnime;
  const [search, setsearch] = useState("");
  function searchfunction() {
    fetch(search);
  }
  return (
    <nav
      class="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
      id={styles.navCont}
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/assets/logo.png" id={styles.logo} />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start" id={styles.menuAppBar}>
          <a class="navbar-item">Home</a>

          <a class="navbar-item">Random</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div
              class="control has-icons-right"
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                onChange={(v) => setsearch(v.target.value)}
                class="input is-dark"
                type="text"
                placeholder="Search for anime"
                id={styles.input}
              ></input>
              <IconButton onClick={searchfunction}>
                <Search style={{ color: "white" }}></Search>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
