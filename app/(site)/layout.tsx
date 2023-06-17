import Link from "next/link";
import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Adam Benhrima Portfolio",
  description: "A portfolio website for Adam Benhrima, a software engineer.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto p-10">
        <header className="flex justify-between items-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent text-lg font-bold"
          >
            Adam
          </Link>
          <nav className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </nav>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
