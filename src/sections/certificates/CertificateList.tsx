import { certificates } from "@/config/certificates";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CertificateList() {
  return (
    <>
      {certificates.map((certificate, index) => (
        <div className="mb-7 mt-20" key={index}>
          <h2 className="text-sm font-bold text-gray-400 mb-3 tracking-tight">
            {certificate.category}
          </h2>
          {certificate.certificates.map((item, i) => (
            <div
              className="border mb-4 p-4 text-sm leading-6 text-gray-800 rounded-md"
              key={i}
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center flex-1">
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.subtitle}
                      width={95}
                      height={72}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 pl-4">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">{item.organization}</p>
                  </div>
                </div>
                <Link href={item.link} className="mt-4 sm:mt-0 sm:ml-4">
                  <button className="w-full sm:w-auto bg-teal-500 text-white rounded-md shadow-lg tracking-tight py-2 px-4 hover:bg-teal-600 transition-colors duration-200">
                    View Certificate
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
