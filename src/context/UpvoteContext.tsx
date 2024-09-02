import React, { createContext, useContext, useState } from 'react';

interface UpvoteListType {
  id: number;
  color: 'grey' | 'blue' | 'red';
  upvotes: boolean[];
}

interface UpvoteContextType {
  upvoteLists: UpvoteListType[];
  toggleUpvoteInList: (listId: number, upvoteIndex: number) => void;
  addUpvoteToList: (listId: number) => void;
  addList: () => void;
}

const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined);

const colors: Array<'grey' | 'blue' | 'red'> = ['grey', 'blue', 'red'];

/**
 * The UpvoteProvider component manages the state for upvote lists.
 * It provides functions to toggle upvotes, add new upvotes, and add new lists.
 * It uses a context to share this state across the component tree.
 */
export const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [upvoteLists, setUpvoteLists] = useState<UpvoteListType[]>([
    { id: 1, color: 'grey', upvotes: [false, false, false] },
    { id: 2, color: 'blue', upvotes: [false, false, false] },
    { id: 3, color: 'red', upvotes: [false, false, false] },
  ]);

  /**
   * Toggles the selected state of an upvote within a specific list.
   */
  const toggleUpvoteInList = (listId: number, upvoteIndex: number) => {
    setUpvoteLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              upvotes: list.upvotes.map((selected, i) =>
                i === upvoteIndex ? !selected : selected
              ),
            }
          : list
      )
    );
  };

  /**
   * Adds a new upvote button to a specific list.
   */
  const addUpvoteToList = (listId: number) => {
    setUpvoteLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, upvotes: [...list.upvotes, false] }
          : list
      )
    );
  };

  /**
   * Adds a new upvote list with the appropriate color, cycling through grey, blue, and red.
   */
  const addList = () => {
    const currentLength = upvoteLists.length;
    const colorIndex = currentLength % colors.length;
    const newColor = colors[colorIndex];
    const newId = currentLength + 1;

    setUpvoteLists([...upvoteLists, { id: newId, color: newColor, upvotes: [false, false, false] }]);
  };

  return (
    <UpvoteContext.Provider value={{ upvoteLists, toggleUpvoteInList, addUpvoteToList, addList }}>
      {children}
    </UpvoteContext.Provider>
  );
};

/**
 * Custom hook to use the UpvoteContext.
 * Ensures the hook is used within an UpvoteProvider.
 */
export const useUpvoteContext = () => {
  const context = useContext(UpvoteContext);
  if (!context) {
    throw new Error('useUpvoteContext must be used within a UpvoteProvider');
  }
  return context;
};
