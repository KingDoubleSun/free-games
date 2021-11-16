import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Free Games | About</title>
      </Head>
      <div className="container text-white p-5 sort-font fs-3 p-indent">
        <p>
          This web app is built based on the API provided by the{" "}
          <a href={process.env.NEXT_PUBLIC_ORIGINAL_SITE} target="_blank">
            Free-To-Game
          </a>{" "}
          website, and some details of each specific game information are
          dynamically scraped from the{" "}
          <a href={process.env.NEXT_PUBLIC_ORIGINAL_SITE} target="_blank">
            Free-To-Game
          </a>{" "}
          website as well, the scrape code is available in{" "}
          <a href={process.env.NEXT_PUBLIC_GIT_HUB} target="_blank">
            my github repository
          </a>
          .
        </p>

        <p className="mt-5">
          You can use this site to find some interesting games to pass your free
          time. The current functionalities of this web app are not very
          complete because of the limitation of the API, but I will try to
          enrich more functionalities in the future. Feel free to explore any
          free games online and enjoy your time.
        </p>
      </div>
    </>
  );
}
