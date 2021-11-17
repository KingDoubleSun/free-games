import Head from "next/head";
import TwoColumnLists from "../components/games/TwoColumnLists";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";

export default function About() {
  return (
    <>
      <Head>
        <title>Free Games | About</title>
      </Head>
      <div className="container text-white p-5 sort-font fs-3">
        <p className="p-indent">
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

        <p className="mt-5 p-indent">
          You can use this site to find some interesting games to pass your free
          time. The current functionalities of this web app are not very
          complete because of the limitation of the API, but I will try to
          enrich more functionalities in the future. Feel free to explore any
          free games online and enjoy your time!
        </p>
        <br />
        <footer className="border-top border-secondary p-5">
          <div className="row">
            <TwoColumnLists
              list={{
                "author:": "Shuwei(Shawn) Liu",
                "latest update:": "17/11/2021",
                "e-mail:": (
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                    style={{ color: "inherit" }}
                  >
                    <AiOutlineMail size={40} /> {process.env.NEXT_PUBLIC_EMAIL}
                  </a>
                ),
                "git-hub:": (
                  <a
                    href={process.env.NEXT_PUBLIC_GIT_HUB}
                    style={{ color: "inherit" }}
                    target="_blank"
                  >
                    <AiFillGithub size={40} />
                  </a>
                ),
              }}
            />
          </div>
        </footer>
      </div>
    </>
  );
}
