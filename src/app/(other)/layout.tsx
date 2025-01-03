import Footer from "@/components/footer";
import Header from "@/components/header";

export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header hasImage={true} />
      {children}
      <Footer />
    </>
  );
}
