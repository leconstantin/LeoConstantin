import CertificateHeader from "@/sections/certificates/CertificateHeader";
import CertificateList from "@/sections/certificates/CertificateList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
};
export default function Certificates() {
  return (
    <>
      <main>
        <CertificateHeader />
        <CertificateList />
      </main>
    </>
  );
}
