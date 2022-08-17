import Head from "next/head";
import LeftSidebar from "../components/sidebar-left/LeftSidebar";
import RightSidebar from "../components/sidebar-right/RightSidebar";


export default function Home() {
  return (
    <div className="top-0 bottom-0 left-0 right-0">
      <Head>
        <title>portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" h-screen w-full bg-blue-50">
        <LeftSidebar />
        <RightSidebar />
      </main>
      
    </div>
  );
}
