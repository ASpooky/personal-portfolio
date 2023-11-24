import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
        <footer className="w-full p-5 bg-slate-500 text-white flex justify-end items-center">
          @abi
        </footer>
      </body>
    </html>
  );
}
