'use client'
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

import { Header } from "@/components/landing/header";

const Landing = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-slate-900">
      <div className="header relative z-10">
        <Header />
      </div>
      <div className="isolate pt-2">
        <div className="py-16 sm:pt-24 lg:pb-28">
          <div className="flex flex-col mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Code Smarter, Not Harder
              </h1>
              <h1 className="py-2 text-2xl font-regular tracking-tight text-gray-400 sm:text-2xl">
                Your own Development Playground
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                A project powered by Next.js, Tailwind, docker,Kubernetes and more.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/dashboard"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  onClick={()=>signIn("google")}
                >
                  Get Started
                </Link>
                <Link
                  target="_blank"
                  href="https://vibe-portfolio.vercel.app/"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  About me <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="flex image rounded-md mt-16 sm:mt-24 w-full h-[40rem] justify-center items-center p-5">
              <Image
                // fill
                width={1155}
                height={600}
                className="object-cover object-left rounded-md"
                src="/product.png"
                alt="Project"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute left-50 inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
