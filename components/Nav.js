import Head from "next/head";

import styles from "../styles/AppBar.module.css";
import "../node_modules/bulma/css/bulma.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { fab } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

const Nav = () => {
  return (
    <nav
      class="navbar is-fixed-top is-dark"
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
            <div class="control has-icons-right">
              <input
                class="input is-dark"
                type="text"
                placeholder="Search for anime"
                id={styles.input}
              ></input>
            </div>
          </div>
          <div class="navbar-item">
            <FontAwesomeIcon
              icon={faSearch}
              class="button is-outlined is-dark is-hovered"
              id={styles.search}
            ></FontAwesomeIcon>{" "}
            {/* <FontAwesomeIcon
              icon={faSearch}
              class="button is-outlined is-dark is-hovered"
              id={styles.search}
            ></FontAwesomeIcon> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
