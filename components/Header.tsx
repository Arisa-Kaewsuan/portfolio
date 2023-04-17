import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-gray-700 h-screen ">
      <div className="flex items-center justify-between">
        <ul className="flex items-center justify-between">
          <li className="mr-6">
            <a className="text-gray-400 hover:text-blue-800" href="#">
              github
            </a>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 hover:text-blue-800" href="#">
              linkedIn
            </a>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 hover:text-blue-800" href="#">
              leetcode
            </a>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 hover:text-blue-800" href="#">
              Behance
            </a>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 hover:text-blue-800" href="#">
              Medium
            </a>
          </li>
        </ul>
        <ul>
          <li className="mr-6">
            <a className="text-gray-400 hover:text-blue-800" href="#">
              GET IN TOUCH
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
