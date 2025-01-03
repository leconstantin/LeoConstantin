export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Root layout</div>
      {children}
    </>
  );
}
