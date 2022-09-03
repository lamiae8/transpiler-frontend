import { React, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

import { ethers } from "ethers";

import dark from "../images/icons8-new-moon-48.png";
import light from "../images/icons8-sun-64.png";
import logo from "../images/Untitled design.png";

const Navbar = () => {
  const navigation = [
    { name: "AlfaToSol", href: "/", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Deploy", href: "/deploy", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // wallet
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
        console.log("not found");
      }
      sethaveMetamask(true);
      console.log("found");
    };
    checkMetamaskAvailability();
  }, []);
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);

      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);

      // setIsConnected(prevConnected=>{!prevConnected? console.log("connected with adress: " + accountAddress) : console.log("not connected"); return !prevConnected});
      {
        isConnected
          ? alert("connected with adress: " + accountAddress)
          : console.log("not connected");
      }
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <>
      <Disclosure
        as="nav"
        className=" border border-b-1 border-t-0 border-r-0 border-l-0 "
        data-theme=""
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <Link to="/">
                    {" "}
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-12 w-auto"
                        src={logo}
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-12 w-auto"
                        src={logo}
                        alt="Workflow"
                      />
                    </div>
                  </Link>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "border-b-2 border-indigo-600 rounded-none"
                              : "text-gray-500 hover:bg-indigo-500 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* WALLET */}

                  <button
                    onClick={connectWallet}
                    className=" py-2 px-4 rounded bg-gradient-to-r from-blue-800  to-pink-400  text-white font-bold text-sm"
                  >
                    Connect Wallet
                  </button>

                  <img src={dark} alt="" className="w-6 h-6 ml-2" />
                  <button
                    data-toggle-theme="night,cupcake"
                    data-act-className="ACTIVECLASS"
                    className="mt-1"
                  >
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                    ></input>
                  </button>
                  <img src={light} alt="" className="w-6 h-6 " />
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
