import React from 'react';
import { useNavigate } from 'react-router-dom';

interface OverViewItemProps {
  title: string;
  path: string;
}

const OverViewItem: React.FC<OverViewItemProps> = ({ title, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className="w-80 h-80 opacity-70 rounded-lg border-white border-2 m-4 flex items-center justify-center hover:opacity-40 hover:cursor-pointer"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default OverViewItem;
