import React from 'react';
import Upvote from './Upvote';
import plusIcon from '../assets/plus.svg';

interface UpvoteListProps {
  upvotes: boolean[];
  color: 'grey' | 'blue' | 'red';
  toggleUpvote: (index: number) => void;
  addUpvote: () => void;
}

/**
 * The UpvoteList component renders a list of Upvote components.
 * It provides functionality to toggle individual upvotes and add new ones to the list.
 */
const UpvoteList: React.FC<UpvoteListProps> = ({ upvotes, color, toggleUpvote, addUpvote }) => {
  return (
    <div className="upvote-list">
      {upvotes.map((isSelected, index) => (
        <Upvote
          key={index}
          isSelected={isSelected}
          onToggle={() => toggleUpvote(index)}
          color={color}
        />
      ))}
      <button
        onClick={addUpvote}
        className="add-upvote-button"
        aria-label="Add upvote"
      >
        <img src={plusIcon} alt="Add Upvote" />
      </button>
    </div>
  );
};

export default UpvoteList;
