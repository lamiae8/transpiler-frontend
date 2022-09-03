import { React, useEffect } from "react";

function About() {
  return (
    // <div className='grid h-screen place-items-center' >
    <div className="flex ">
      {/* About us */}
      <div className="container w-1/2 ml-4 mt-12">
        <p className="mt-4 mb-10 text-4xl text-center font-bold font-mono ">
          <span className="text-sky-600">About</span> Us
        </p>

        <p className="text-center p-4 font-bold font-mono text-lg">
          In a nutshell, <span className="text-purple-600">AlfatoSol</span>{" "}
          transpiler is a tool that helps users convert alfa code to a solidity
          smart contract.
          <br />
          <br />
          <span className="text-purple-600">AlfatoSol</span> has helped a lot of
          users, ranging from developers, to founders and web3 enthusiasts, It
          allows everybody to produce quality & well tested{" "}
          <span className="text-sky-300">smart contracts</span> without the need
          of mastering solidity.
          <br />
          <br />
          All you have to do is having a basic understanding of Alfa, and you'll
          be able to create any smart contracts you need.
          <br />
          <br />
          <span className="text-purple-600">AlfatoSol</span> is the best & only
          realtime tranpiler in the market, you can produce a smart contract &
          deploy it in <span className="text-pink-400">SECONDS!!!</span>
        </p>
      </div>

      <div className="grid grid-cols-2 divide-x m-0 p-0 w-2">
        <p className="h-full w-0"></p>
        <p className="h-full w-0"></p>
      </div>

      {/* Advantages */}
      <div className="container w-1/2 mr-4 mt-12">
        <p className="mt-4 mb-10 text-4xl text-center font-bold font-mono ">
          <span className="text-sky-600">Why Us ?</span>
        </p>

        <ul className="list-none text-center p-4">
          <li className="flex">
            <div className="rounded-full border-4 border-sky-600 bg-sky-600 w-12 h-12 text-white text-2xl">
              1
            </div>
            <p className="text-2xl font-mono font-bold">
              Fastest & Best Realtime transpiler in the market
            </p>
          </li>
          <li className="flex mt-10">
            <div className="rounded-full border-4 border-purple-600 bg-purple-600 w-12 h-12 text-white text-2xl">
              2
            </div>
            <p className="text-2xl font-mono font-bold">
              Instantaneous translation for both files & text
            </p>
          </li>
          <li className="flex mt-10">
            <div className="rounded-full border-4 border-pink-600 bg-pink-600 w-12 h-12 text-white text-2xl">
              3
            </div>
            <p className="text-2xl font-mono font-bold">
              Instantaneous & One Click Deployment features
            </p>
          </li>
          <li className="flex mt-10">
            <div className="rounded-full border-4 border-indigo-600 bg-indigo-600 w-12 h-12 text-white text-2xl">
              4
            </div>
            <p className="text-2xl font-mono font-bold">
              Unlimited Translations & Deployments for{" "}
              <span className="text-fuchsia-500">FREE</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default About;
