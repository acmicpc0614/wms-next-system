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
      className="opacity-70 rounded-lg border-y-graydark"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default OverViewItem;
