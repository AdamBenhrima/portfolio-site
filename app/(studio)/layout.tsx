import "../globals.css";

export const metadata = {
  title: "Adam Benhrima Portfolio",
  description: "A portfolio website for Adam Benhrima, a software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
