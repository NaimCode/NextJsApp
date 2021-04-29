import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Nav";
import Welcome from "../components/Welcome";
import Card from "../components/Card";
//import MenuIcon from "@material-ui/core/MenuIcon";
export default function Home() {
  const [anime, setAnime] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(async () => {
    if (search !== "") {
      const res = await fetch(
        "https://simpleanime.p.rapidapi.com/anime/search/" + search,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "7a993e4f8emshb10196fe71115b3p11e37bjsn7c10e43834bb",
            "x-rapidapi-host": "simpleanime.p.rapidapi.com",
          },
        }
      )
        .then((response) =>
          response.json().catch((err) => {
            console.err(`'${err}' happened!`);
            return {};
          })
        )
        .then((json) => {
          console.log(json.data);
          setAnime(json.data);
        })
        .catch((err) => {
          console.log("fetch request failed: ", err);
        });
    }
    return () => {
      cleanup;
    };
  }, [search]);
  return (
    <div>
      <Head>
        <title>Free Animes To Watch</title>
      </Head>
      <main className={styles.body}>
        <NavBar setAnime={setsearch}></NavBar>
        <Welcome></Welcome>
        <div className={styles.backContainer}>
          <div class="container is-widescreen">
            <div class="notification is-dark">
              <span>Animes found ({anime.length})</span>
              <br />
              <div className={styles.animeList}>
                {anime.map((animeone) => (
                  <Card anime={animeone}></Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <br />
        <div id={styles.footer} class="notification is-dark"></div> */}
      </main>
    </div>
  );
}

// export async function getStaticProps(context) {
//   var anime;
//   const res = await fetch(
//     "https://simpleanime.p.rapidapi.com/anime/search/dragon%20ball",
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "7a993e4f8emshb10196fe71115b3p11e37bjsn7c10e43834bb",
//         "x-rapidapi-host": "simpleanime.p.rapidapi.com",
//       },
//     }
//   )
//     .then((response) =>
//       response.json().catch((err) => {
//         console.err(`'${err}' happened!`);
//         return {};
//       })
//     )
//     .then((json) => {
//       anime = json.data;
//     })
//     .catch((err) => {
//       console.log("fetch request failed: ", err);
//     });

//   // const data = await res.json();

//   // if (!data) {
//   //   return {
//   //     notFound: true,
//   //   };
//   // }

//   return {
//     props: { anime }, // will be passed to the page component as props
//   };
// }
const initAnime = [
  {
    id: 1,
    title: "Demon Slayer",
    episode: 4,
    thumbnail:
      "https://cdn.mos.cms.futurecdn.net/qXsVayNBGNZejBMQeYNiHa-1200-80.jpg",
  },
  {
    id: 2,
    title: "Youjo Senki",
    episode: 12,
    thumbnail:
      "https://www.tvovermind.com/wp-content/uploads/2018/12/Youjo.jpg",
  },
  {
    id: 3,
    title: "Koruko No Basket",
    episode: 43,
    thumbnail:
      "http://intimewithasia.com/wp-content/uploads/2016/08/KurokoNoBasket_Anime_Une.jpg",
  },
  {
    id: 4,
    title: "My hero academia",
    episode: 1,
    thumbnail:
      "https://cdn.vox-cdn.com/thumbor/jXqE0_L-tKHYVWHJ-OrZk9cubVI=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10601781/48e35398.jpg",
  },
  {
    id: 5,
    title: "I'm a spider so what",
    episode: 23,
    thumbnail: "https://i.ytimg.com/vi/eciJ-ercyPU/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "That time i reincarnated as a slime",
    episode: 4,
    thumbnail:
      "https://otakukart.com/wp-content/uploads/2020/07/That-Time-I-Got-Reincarnated-As-A-Slime.jpg",
  },
  {
    id: 7,
    title: "Dr.Stone",
    episode: 9,
    thumbnail:
      "https://www.tvqc.com/wp-content/uploads/2019/12/dr-stone-kv-village-header.jpg",
  },
  ,
  {
    id: 8,
    title: "Carole And Tuesday",
    episode: 10,
    thumbnail:
      "https://www.tvseasonspoilers.com/wp-content/uploads/2020/04/carole-and-tuesday-ep-18-both-girls.jpg",
  },
  ,
  {
    id: 9,
    title: "No Game No Life",
    episode: 5,
    thumbnail:
      "https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdPXfQOsz8xSnrclspzJZ1X2nmmoykkmxwPJZDuE1psTbP9DMl1_Dg8RgXgp4F8uDrXh1ZWs7FWjeuJqCn1ghFQ-gztg.jpg?r=ba3",
  },
];
