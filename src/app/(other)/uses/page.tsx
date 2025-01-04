import UsesHeader from "@/sections/uses/UsesHeader";
import UsesList from "@/sections/uses/UsesList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
};
export default function Uses() {
  return (
    <>
      <main>
        <UsesHeader />
        <UsesList />
      </main>
    </>
  );
}
