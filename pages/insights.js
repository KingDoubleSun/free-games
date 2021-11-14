import Head from "next/head";
import { Bar } from "react-chartjs-2";

export default function insights() {
  return (
    <>
      <Head>
        <title>Free Games | Insights</title>
      </Head>
      <div className="container">
        <h1 className="text-white text-center">Coming Soon</h1>
        <Bar
          data={{
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  "rgba(255, 99, 132)",
                  "rgba(255, 159, 64)",
                  "rgba(255, 205, 86)",
                  "rgba(75, 192, 192)",
                  "rgba(54, 162, 235)",
                  "rgba(153, 102, 255)",
                  "rgba(201, 203, 207)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
        />
      </div>
    </>
  );
}
