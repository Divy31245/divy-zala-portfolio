import LeftSidebar from "../components/sidebar-left/sidebar-left";
import Image from "next/dist/client/image";
import fbpage from "../assets/prjfb.png";
import medclone from "../assets/medcln.png";
import shopsite from "../assets/shopsite.png";
import worldle from "../assets/wordle.png";
import Link from "next/dist/client/link";
export default function Works() {
  return (
    <main className="md:flex space-y-6 scrollbar-hide bg-blue-50">
      <LeftSidebar />
      <div className="hidden md:flex md:w-1/4 scrollbar-hide"></div>
      <div id="main-div" className="flex flex-col w-full  items-center md:w-3/4 md:flex md:flex-col md:items-center p-4 space-y-12 ">
        
        <h1 className="text-blue-500 font-bold text-3xl">My Projects!</h1>
        <div className="p-4 place-items-center grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3  scrollbar-hide">
          <Link href={"https://facebook-clone-divy31245.vercel.app/"}>
            <div className=" bg-white border-2 border-blue-300 w-full h-full group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer ">
              <Image
                alt=""
                src={fbpage}
                height={300}
                width={500}
                className="rounded-lg  object-cover ease-in-out duration-500 group-hover:scale-110"
              />

              <div className="absolute flex flex-col space-y-2 items-center justify-center text-white bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80">
                <div className="text-xl border-b-2 border-white">
                  <h1>Facebook Clone</h1>
                </div>
                <div className="text-white text-sm">
                  <p>
                    {" "}
                    Made by Next.js and Tailwind-css which includes facebook
                    authentication(next/auth).{" "}
                  </p>
                </div>
              </div>
              {/* <div className="text-xl hidden absolute hover:flex">Facebook-Clone</div> */}
            </div>
          </Link>
          <Link href={"https://mediumclone-lcc97yjes-divy31245.vercel.app/"}>
            <div className=" bg-white border-2 border-blue-300 w-full h-full group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer ">
              <Image
                alt=""
                src={medclone}
                height={300}
                width={500}
                className="rounded-lg  object-cover ease-in-out duration-500 group-hover:scale-110"
              />
              <div className="absolute flex flex-col space-y-2 items-center justify-center text-white bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80">
                <div className="text-xl border-b-2 border-white">
                  <h1>Medium Clone</h1>
                </div>
                <div className="text-white text-sm">
                  <p>
                    {" "}
                    It&apos;s a bloging websites which is a clone of popular
                    bloging site MEDIUM. Made with Next.js,Tailwind-css and
                    Sanity CMS.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"http://crwn-clothing-live-divy.herokuapp.com/"}>
            <div className=" bg-white border-2 border-blue-300 w-full h-full group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer ">
              <Image
                alt=""
                src={shopsite}
                height={300}
                width={500}
                className="rounded-lg  object-cover ease-in-out duration-500 group-hover:scale-110"
              />
              <div className="absolute flex flex-col space-y-2 items-center justify-center text-white bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80">
                <div className="text-xl border-b-2 border-white">
                  <h1>An Ecommerce Website</h1>
                </div>
                <div className="text-white text-sm">
                  <p>
                    {" "}
                    A Clothing Website made by React.js,SASS,Firebase(Database),
                    which includes firebase google auth and for payment handling
                    there is Stripe Api.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"https://divy31245.github.io/wordleClone/"}>
            <div className=" bg-white border-2 border-blue-300 w-full h-full group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer ">
              <Image
                alt=""
                src={worldle}
                height={300}
                width={500}
                className="rounded-lg  object-cover ease-in-out duration-500 group-hover:scale-110"
              />
              <div className="absolute flex flex-col space-y-2 items-center justify-center text-white bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80">
                <div className="text-xl border-b-2 border-white">
                  <h1>Wordle Clone</h1>
                </div>
                <div className="text-white text-sm">
                  <p>
                    {" "}
                    A Wordle game which is made of HTML,CSS and Advanced
                    Javascript which is a fun word game for everyday
                    entertainment.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
