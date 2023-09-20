import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import headShot from "../../assets/images/headShot.jpg";
import FireTruck from "../../assets/images/FireTruck.jpg";
import airPlane from "../../assets/images/airplane.jpg";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://user-images.githubusercontent.com/1500684/158276320-c46b661b-8eff-4a4d-82c6-cf296c987a12.jpg"
                alt="BB King playing blues on his Gibson 'Lucille' guitar"
              />
              <div className="absolute inset-0 bg-[color:rgba(27,167,254,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-blue-500 drop-shadow-md">
                  PTI JOB FAIR EDITION
                </span>
              </h1>
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
  <div className="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={headShot} alt="headshot"/>
  </div>
  <div>
    <h2 className="text-gray-800 text-3xl font-semibold">Welcome!</h2>
    <p className="mt-2 text-gray-600">
      Below you will find a special resume tailored for this event. 
      I've highlighted some key experiences and defining moments in my
      personal  journey in pursuit for meaningful and fulling work.
    </p>
  </div>
  <div className="flex justify-end mt-4">
    <a href="#" className="text-xl font-medium text-indigo-500">Victor Dominguez Reyes</a>
  </div>
</div>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
                alt: "Fly.io",
                href: "https://fly.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/158238105-e7279a0c-1640-40db-86b0-3d3a10aab824.svg",
                alt: "PostgreSQL",
                href: "https://www.postgresql.org/",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
                alt: "Prisma",
                href: "https://prisma.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
                alt: "Tailwind",
                href: "https://tailwindcss.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
                alt: "Cypress",
                href: "https://www.cypress.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
                alt: "MSW",
                href: "https://mswjs.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
                alt: "Vitest",
                href: "https://vitest.dev",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
                alt: "Testing Library",
                href: "https://testing-library.com",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
                alt: "Prettier",
                href: "https://prettier.io",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
                alt: "ESLint",
                href: "https://eslint.org",
              },
              {
                src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
                alt: "TypeScript",
                href: "https://typescriptlang.org",
              },
            ].map((img) => (
              <a
                key={img.href}
                href={img.href}
                className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} className="object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div
                className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
            ></div>
            <div className="relative z-10">
                <img
                    src={FireTruck}
                    alt=""
                    className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0;"
                />
                <div className="pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16;">
                    <div className="timeline-pointer" aria-hidden="true"></div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >Jun 2015</span>
                        <h1 className="text-2xl font-bold pt-1">
                            An Amazing Intern
                        </h1>
                        <p className="pt-1">
                        Just prior to completing my high school education, I secured a valuable internship opportunity with the 
                        Airport Authority, made possible through a Greensboro-based initiative. My original intention, 
                        prior to graduation, was to embark on a career in aviation. My commitment was so steadfast that 
                        I even enrolled in an esteemed aviation academy at Andrews High School In High Point.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <img
                    src={airPlane}
                    alt="airPlane"
                    className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0;"
                />
                <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-0 md:mr-auto md:pl-0 md:pr-16;">
                    <div
                        className="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div className="bg-white p-6 rounded-md shadow-md text-right">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >Jun 2016</span>
                        <h1 className="text-2xl font-bold pt-1">A Second Internship</h1>
                        <p className="pt-1">
                        Following my graduation, I had the privilege of securing another internship, this time with Cessna Citation. During this role, 
                        I contributed as a valuable member of the parts room team, where I gained valuable experience in managing inventory, 
                        conducting part checkouts, and delving into the fundamentals of shipping procedures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
