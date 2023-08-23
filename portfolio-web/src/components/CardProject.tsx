import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface Props {
  projectName: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

function CardProject({ projectName, description, image, link, tags }: Props) {
  return (
    <div className="hover:bg-slate-900 rounded-md p-4 color-primary card-project">
      <Link href={link} target="blank">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col lg:flex-row gap-11">
            <div className="w-full lg:w-1/3  overflow-hidden">
              <Image
                src={image}
                width={300}
                height={50}
                alt={projectName}
                className="mx-auto lg:mx-0"
              />
            </div>

            <div className="w-full lg:w-2/3">
              <div className="flex gap-4">
                <p className="font-bold mb-2 ">{projectName}</p>
                <div className="w-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    id="svg-arrow"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="text-slate-400">{description}</p>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap color-text-blue">
            {tags.map((tag, index) =>
              index < 5 ? (
                <p key={index} className="px-2 bg-slate-800 rounded-lg">
                  {tag}
                </p>
              ) : null
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardProject;
