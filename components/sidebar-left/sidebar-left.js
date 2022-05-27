import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LeftSidebar() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between bg-white h-screen w-1/4">
      <div className="flex flex-col items-center justify-center py-10 text-4xl font-extrabold space-y-2">
        <Image
          src={
            "https://media-exp1.licdn.com/dms/image/C5603AQHakfcBojiRCg/profile-displayphoto-shrink_400_400/0/1646374261617?e=1658966400&v=beta&t=7dPrvGbNozM-rEpnCDLxgf1gXwS2pbz9bIUrJxyZc9w"
          }
          width={200}
          height={200}
          className="rounded-full"
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-4 items-center mb-16">
        <div className="navlinks">
          <button type="button" onClick={() => router.push("/")}>
            Home
          </button>
        </div>
        <div className="navlinks">
          <button type="button" onClick={() => router.push("/Works")}>
            Works
          </button>
        </div>
        <div className="navlinks">
          <button type="button" onClick={() => router.push("/Services")}>
            Services
          </button>
        </div>
        <div className="navlinks">
          <button type="button" onClick={() => router.push("/Contact-me")}>
            Contact me
          </button>
        </div>
        <div className="navlinks">
          <button type="button" onClick={() => router.push("/About-me")}>
            About me
          </button>
        </div>
      </div>
    </div>
  );
}
