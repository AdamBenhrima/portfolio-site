import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m
        <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
          {" "}
          Adam
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Welcome to my portfolio! You can checkout some of the stuff I've been
        working on here!
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            href={`/projects/${project.slug}`}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500 h-52"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
