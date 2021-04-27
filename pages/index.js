import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Nav";
import Welcome from "../components/Welcome";

//import MenuIcon from "@material-ui/core/MenuIcon";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.body}>
        <NavBar></NavBar>
        <Welcome>
          {" "}
          <div class="box">jjjjj</div>;
        </Welcome>
      </main>
    </div>
  );
}
