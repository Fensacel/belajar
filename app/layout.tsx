import "./globals.css";

export const metadata = {
  title: "Website Pahri",
  description: "Static page dengan Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
