import { useRef } from "react";
import Socialicons from "../Socialicons";

export default function RightSidebar() {
  const aboutmeRef = useRef();
  const connectRef = useRef();
  function handleClick1(){
    aboutmeRef.current.scrollIntoView({behavior:'smooth'})
  }
  function handleClick2(){
    connectRef.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <>
      <div className="w-full  ">
        <div className="hidden md:w-1/4 md:flex"></div>
        <main className="flex  flex-col justify-center space-y-3  items-center w-full bg-white bg-repeat-round  h-screen md:w-3/4 md:float-right">
          {/* paragraph and title */}
          <div  className=" justify-center mainpageborder   drop-shadow-2xl bg-white rounded-bl-3xl border-2 h-full md:m-4  w-full flex flex-col items-center space-x-7  md:flex md:flex-col md:items-center md:justify-center md:w-3/4 ">
            <div className="text-2xl">Hey, Divy Zala here!</div>
            <div className="text-5xl text-blue-500 font-bold">
              A React/Next.js Web Developer.
            </div>
            <div className="flex justify-center items-center space-x-2 mt-3">
              <button onClick={handleClick1}  className="p-2 border-blue-400 border-2 text-blue-600 bg-white rounded-xl hover:bg-blue-500 hover:text-white mt-1 transtition-all duration-200">
                About me
              </button>
              <button onClick={handleClick2} className="p-2 border-blue-400 border-2 text-blue-600 bg-white rounded-xl hover:bg-blue-500 hover:text-white mt-1 transtition-all duration-200">
                My Socials
              </button>
            </div>
          </div>
        </main>
        {/* <div className="justify-center h-full   drop-shadow-2xl bg-white rounded-bl-3xl border-2  md:m-4  w-full flex flex-col items-center space-x-7  md:flex md:flex-col md:items-center md:justify-center md:w-3/4"><h1>hello</h1></div> */}
      </div>
      {/* About me section */}
      <div className="w-full  ">
        <div className="hidden md:w-1/4 md:flex"></div>
        <main ref={aboutmeRef} className="flex  flex-col justify-center items-center w-full  bg-white h-screen md:w-3/4 md:float-right">
          {/* paragraph and title */}
          <div className=" justify-center   drop-shadow-2xl bg-white aboutmeborder border-2 h-full md:m-4  w-full flex flex-col items-center space-y-5  md:flex md:flex-col md:items-start md:p-8 md:justify-center md:w-3/4 ">
            <h1 className="text-5xl font-extrabold float-left">About me</h1>
            <div className="text-xl w-3/4 font-light">
              I am a self-taught React/Next.js developer. I have always been
              fascinated by software&apos;s potentials as a designer. So I
              learned web development by building multiple websites and web
              applications. Currently, I am looking for a position as a
              front-end or full-stack developer, joining an experienced team and
              contribute to building great products.
            </div>
            <a href="https://drive.google.com/file/d/1KSvb7omGEXYzely5gddNa2PMOOrBsurG/view?usp=sharing" target="_blank" rel="noreferrer">
            <button
              href="https://drive.google.com/file/d/1KSvb7omGEXYzely5gddNa2PMOOrBsurG/view?usp=sharing"
              className="p-2 border-blue-400 border-2 text-blue-600 bg-white rounded-xl hover:bg-blue-500 hover:text-white mt-1 transtition-all duration-200"
            >
              Checkout My Resume
            </button></a>
          </div>
        </main>
        {/* <div className="justify-center h-full   drop-shadow-2xl bg-white rounded-bl-3xl border-2  md:m-4  w-full flex flex-col items-center space-x-7  md:flex md:flex-col md:items-center md:justify-center md:w-3/4"><h1>hello</h1></div> */}
      </div>
      {/* my socials section */}
      <div className="w-full  ">
        <div className="hidden md:w-1/4 md:flex"></div>
        <main ref={connectRef} className="flex  flex-col justify-center items-center w-full bg-white  h-screen md:w-3/4 md:float-right">
          {/* paragraph and title */}
          <div className=" justify-center   drop-shadow-2xl bg-white socialborder border-2 h-full md:m-4 space-y-7  w-full flex flex-col items-center space-x-7  md:flex md:flex-col md:items-center md:justify-center md:w-3/4 ">
            <div className="text-4xl">Let&apos;s connect!</div>
            {/* Icons */}
            <Socialicons />
          </div>
        </main>
        {/* <div className="justify-center h-full   drop-shadow-2xl bg-white rounded-bl-3xl border-2  md:m-4  w-full flex flex-col items-center space-x-7  md:flex md:flex-col md:items-center md:justify-center md:w-3/4"><h1>hello</h1></div> */}
      </div>
    </>
  );
}

// <div className="flex flex-col items-center justify-center bg-white md:w-3/4 ">
//   <div className="flex items-center justify-center">
//     <a
//       href="https://drive.google.com/file/d/1KSvb7omGEXYzely5gddNa2PMOOrBsurG/view?usp=sharing"
//       target='"_blank"'
//       rel="noreferer"
//       className="flex cursor-pointer items-center bg-blue-500 justify-center space-x-1 absolute bottom-0 right-0 mb-8 mr-6 text-white rounded-xl border-b hover:-skew-y-2 p-4 text-sm md:text-xl  hover:bg-indigo-500 hover:text-white hover:animate-pulse transition ease-in-out duration-100 delay-75 "
//     >
//       <div>Checkout my resume for more details</div>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         viewBox="0 0 20 20"
//         fill="currentColor"
//       >
//         <path
//           fillRule="evenodd"
//           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </a>
//   </div>
// </div>
