// LinkPill.tsx

import React from 'react';
import { FaGithub, FaDev } from 'react-icons/fa';

interface LinkPillProps {
  url: string;
  icon: 'github' | 'devpost';
}

const LinkPill: React.FC<LinkPillProps> = ({ url, icon }) => {
  const Icon = icon === 'github' ? FaGithub : FaDev;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className=" text-white text-xs rounded-full flex items-center hover:bg-secondary transition-all">
        <Icon className="text-xl"/>
      </div>
    </a>
  );
};

export default LinkPill;
