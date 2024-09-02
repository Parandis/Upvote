import React from 'react';
import UpvoteList from './UpvoteList';
import { useUpvoteContext } from '../context/UpvoteContext';

/**
 * The UpvoteListContainer component is responsible for rendering multiple
 * UpvoteList components. It also provides functionality to add new lists.
 * It interacts with the UpvoteContext to manage the state of upvote lists.
 */
const UpvoteListContainer: React.FC = () => {
  const { upvoteLists, toggleUpvoteInList, addUpvoteToList, addList } = useUpvoteContext();

  return (
    <div className="upvote-list-container">
      {upvoteLists.map((list) => (
        <UpvoteList
          key={list.id}
          upvotes={list.upvotes}
          color={list.color}
          toggleUpvote={(index) => toggleUpvoteInList(list.id, index)}
          addUpvote={() => addUpvoteToList(list.id)}
        />
      ))}
      <button
        className="add-list-button"
        onClick={addList}
        aria-label="Add new list"
      >
        Add List
      </button>
    </div>
  );
};

export default UpvoteListContainer;
