import CertificateHeader from "@/sections/certificates/CertificateHeader";
import CertificateList from "@/sections/certificates/CertificateList";

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
