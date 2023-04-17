import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-gray-700 h-100 flex items-center justify-between">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://github.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://linkedin.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://youtube.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://behance.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://medium.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div>
        <SocialIcon
          url="https://email.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        GET IN TOUCH
      </div>
    </header>
  );
}
