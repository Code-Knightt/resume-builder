import React from "react";
import { useSelector } from "react-redux";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  CodeBracketSquareIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

function PersonalSection() {
  const data = useSelector((state) => state.personal);

  return (
    <div className="flex flex-row scalable-container justify-between items-start w-full col-span-2 mb-4">
      <div className="max-w-[55%]">
        <h1 className="text-c-big font-bold mb-4 leading-[3rem] w-[100%]">
          {data.name}
        </h1>
        <h3 className="text-c-normal font-normal mb-4 leading-5 w-max">
          {data.designation}
        </h3>
        <p className="text-base font-light">{data.description}</p>
      </div>

      <div className="text-right child:text-base child:font-light flex flex-col justify-between h-full">
        {data.email && (
          <div className="flex flex-row-reverse gap-x-2 items-center">
            <EnvelopeIcon className="h-4 w-4" />
            <a href={`mailto:${data.email}`}>
              <p>{data.email}</p>
            </a>
          </div>
        )}
        {data.phone && (
          <div className="flex flex-row-reverse gap-x-2 items-center">
            <PhoneIcon className="h-4 w-4" />
            <a href={`tel:${data.phone}`}>
              <p>{data.phone}</p>
            </a>
          </div>
        )}
        {data.country && (
          <div className="flex flex-row-reverse gap-x-2 items-center">
            <MapPinIcon className="h-4 w-4" />
            <p>
              {data.city}, {data.country}
            </p>
          </div>
        )}
        {data.website && (
          <div className="flex flex-row-reverse gap-x-2 items-center">
            <GlobeAltIcon className="h-4 w-4" />
            <a href={data.website} target="_blank">
              {data.website}
            </a>
          </div>
        )}
        {data.github && (
          <div className="flex flex-row-reverse gap-x-2 items-center">
            <CodeBracketSquareIcon className="h-4 w-4" />
            <a href={data.github} target="_blank">
              {data.github}
            </a>
          </div>
        )}
        {data.linkedin && (
          <div className="flex flex-row-reverse gap-x-2 items-center">
            <BriefcaseIcon className="h-4 w-4" />
            <a href={data.linkedin} target="_blank">
              {data.linkedin}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalSection;
