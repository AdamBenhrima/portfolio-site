import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    project: string;
  };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;

  const project = await getProject(slug);
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between">
        <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-teal-500 hover:text-white transition"
        >
          View Project
        </a>
      </header>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl w-min self-center"
      />
    </div>
  );
};

export default Project;
