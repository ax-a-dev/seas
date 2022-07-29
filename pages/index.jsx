import Image from "next/image";
import Link from "next/link";
import ship from "../public/ship.svg";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-blue-accent-700 h-screen">
      <Head>
        <title>Home - Seas</title>
      </Head>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-blue-accent-400">
                <Image src={ship} />
              </div>
            </div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">By</span>
                </span>{" "}
                shippers, for{" "}
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-light-blue-accent-400" />
                  <span className="relative text-light-blue-900">shippers</span>
                </span>
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                Seas is a free and open source platform for developers,
                shippers, and anyone else to share their products(ships),
                projects, and more with the world!
              </p>
            </div>
            <div>
              <Link href="/waitlist">
                <a className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-light-blue-900 transition duration-200 rounded-full shadow-md hover:text-blue-900 bg-light-blue-accent-400 hover:bg-blue-accent-100 focus:shadow-outline focus:outline-none">
                  Join Waitlist
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
