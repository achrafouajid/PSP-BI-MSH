import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";

const BlogCard = ({ id, date, title, content, image, tag, job, author }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
      <div className="overflow-hidden rounded-t-lg">
        <img className=" w-full object-fill" src={image} />
      </div>
      <div className="p-4">
        <span className="bg-eeffcc rounded-md border border-ccf px-2 py-1 inline-block">
          {author}
        </span>
        <span className="bg-eeffcc rounded-md border border-ccf px-2 py-1 inline-block">
          {job}
        </span>
        <p className="text-xs uppercase tracking-wide font-normal text-gray-600">
          <MdDateRange className="inline-block mr-1" />
          {date}
        </p>
        <h3 className="font-bold text-2xl my-1">{title}</h3>
        <p className="text-gray-600 text-xl">{content}</p>
      </div>
      <Link
        className="text-lg text-gray-600 my-5 block"
        href={`/blog/${id}`}
        passHref
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
