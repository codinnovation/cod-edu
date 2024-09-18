import Head from "next/head";
import Intro from "./intro";

export default function Home() {

  return (
    <>
      <Head>
        <title>Welcome To Cod E-Learning</title>
        <meta name="description" content="Welcome To Cod E-Learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lg2.png" />
      </Head>
      <div>
        <Intro />
      </div>
    </>
  );
}
