import Image from "next/image";

export default function RightSidebar() {
  return (
    <div className="w-full  ">
      <div className="hidden md:w-1/4 md:flex"></div>
      <main className="flex flex-col justify-center items-center w-full  h-screen md:w-3/4 md:float-right">
        {/* paragraph and title */}
        <div className=" w-full flex flex-col items-center space-x-7 content-center md:flex md:flex-col md:items-center md:justify-center md:w-3/4 ">
         

          <div className="text-2xl">Hey, Divy Zala here!</div>
          <div className="text-5xl text-blue-500 font-bold">
            A React/Next.js Web Developer.
          </div>
        </div>
        {/* skills button */}
        <div className="flex flex-col items-center justify-center bg-white md:w-3/4 ">
          <div className="flex items-center justify-center">
            <a
              href="https://drive.google.com/file/d/1KSvb7omGEXYzely5gddNa2PMOOrBsurG/view?usp=sharing"
              target='"_blank"'
              rel="noreferer"
              className="flex cursor-pointer items-center bg-blue-500 justify-center space-x-1 absolute bottom-0 right-0 mb-8 mr-6 text-white rounded-xl border-b hover:-skew-y-2 p-4 text-sm md:text-xl  hover:bg-indigo-500 hover:text-white hover:animate-pulse transition ease-in-out duration-100 delay-75 "
            >
              <div>Checkout my resume for more details</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
