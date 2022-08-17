import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LeftSidebar() {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleClick = () => {
    setNavbarOpen((navbarOpen) => !navbarOpen);
    console.log(navbarOpen);
  };
  return (
    <main className="">
      <div className="flex justify-between md:hidden p-2 bg-white">
        <button onClick={() => handleClick()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* <div className="">
          <Image
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQHakfcBojiRCg/profile-displayphoto-shrink_400_400/0/1646374261617?e=1658966400&v=beta&t=7dPrvGbNozM-rEpnCDLxgf1gXwS2pbz9bIUrJxyZc9w"
            }
            width={24}
            height={24}
            className="rounded-full"
            alt=""
          />
        </div> */}
      </div>
      <div
        className={
          navbarOpen
            ? "navbar bg-blue-50 "
            : "scale-100 relative transition-all duration-300 ease-linear"
        }
      >
        <div className="flex flex-col items-center justify-center py-10 text-4xl font-extrabold space-y-2">
          <Image
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQE_C8nH1c-Wbw/profile-displayphoto-shrink_400_400/0/1660202713680?e=1666224000&v=beta&t=h8OSJgNyprclxnS53qtmMs91GnpwhNafR16z7zGswk0"
            }
            width={200}
            height={200}
            className={"rounded-full"}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-4 items-center mb-16">
          <div className={router.pathname=='/'?"active-navlink":"navlinks"}>
            <button type="button" onClick={() => router.push("/")}>
              Home
            </button>
          </div>
          <div className={router.pathname=='/Works'?"active-navlink":"navlinks"}>
            <button type="button" onClick={() => router.push("/Works")}>
              Works
            </button>
          </div>
          <div className={router.pathname=='/Services'?"active-navlink":"navlinks"}>
            <button type="button" onClick={() => router.push("/Services")}>
              Services
            </button>
          </div>
          <div className={router.pathname=='/Contactme'?"active-navlink":"navlinks"}>
            <button type="button" onClick={() => router.push("/Contactme")}>
              Contact me
            </button>
          </div>
          {/* <div className={router.pathname=='/About-me'?"active-navlink":"navlinks"}>
            <button type="button" onClick={() => router.push("/About-me")}>
              About me
            </button>
          </div> */}
        </div>
      </div>
    </main>
  );
}
