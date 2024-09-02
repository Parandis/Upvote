import React from 'react';
import '../styles/Style.css';
import { ReactComponent as ArrowIcon } from '../assets/arrow-up.svg';

interface UpvoteProps {
  isSelected: boolean;
  onToggle: () => void;
  color: 'grey' | 'blue' | 'red';
}

const Upvote: React.FC<UpvoteProps> = ({ isSelected, onToggle }) => {
  const handleClick = () => {
    onToggle();
  };

  // Define classes based on the selection state
  const upvoteClass = `upvote ${isSelected ? 'selected' : 'default'}`;

  return (
    <div
      className={upvoteClass}
      onClick={handleClick}
      role="button"
      aria-pressed={isSelected}
      aria-label="Upvote"
    >
      <ArrowIcon className="arrow" />
    </div>
  );
};

export default Upvote;
