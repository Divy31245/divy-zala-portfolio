import LeftSidebar from "../components/sidebar-left/sidebar-left";
import Image from "next/dist/client/image";
import css from "../assets/css.png";
import js from "../assets/js.gif";
import html from "../assets/html.png";
import react from "../assets/react-logo.png";
import nodejs from "../assets/node.png";
import express from "../assets/express.png";
import nextjs from "../assets/next1.png";
import tailwind from "../assets/tailwind.svg";

export default function Services() {
  return (
    <main className="md:flex md:h-screen">
      <LeftSidebar />
      <div className="hidden md:flex md:w-1/4 h-screen scrollbar-hide"></div>
      <div className="md:w-3/4 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-4 p-4 place-items-center">
        <div className="services-icons">
          <Image width={100} height={100} src={html} alt="" />
        </div>
        <div className="services-icons">
          <Image width={100} height={100} src={css} alt="" />
        </div>
        <div className="services-icons">
          <Image width={100} height={100} src={js} alt="" />
        </div>
        <div className="services-icons">
          <Image width={100} height={100} src={react} alt="" />
        </div>
        <div className="services-icons">
          <Image width={200} height={175} src={nextjs} alt="" />
        </div>
        <div className="services-icons">
          <Image width={200} height={175} src={nodejs} alt="" />
        </div>
        <div className="services-icons">
          <Image width={200} height={65} src={express} alt="" />
        </div>
        <div className="services-icons">
          <Image width={100} height={100} src={tailwind} alt="" />
        </div>
      </div>
    </main>
  );
}
