import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";

export default function Home(props) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {props.exploreData.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Live Anywhere</h2>

          {props.cardsData.map((item) => (
            <MediumCard />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://links.papareact.com/pyp");
  const exploreData = await response.json();

  const res = await fetch("https://links.papareact.com/zp1");
  const cardsData = await res.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
