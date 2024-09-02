import React from 'react';
import UpvoteListContainer from './components/UpvoteListContainer';
import { UpvoteProvider } from './context/UpvoteContext';
import './styles/Style.css';

/**
 * The App component serves as the root of the application.
 * It renders the UpvoteListContainer inside the UpvoteProvider context.
 */
const App: React.FC = () => {
  return (
    <div className="container">
      <UpvoteListContainer />
    </div>
  );
};

export default () => (
  <UpvoteProvider>
    <App />
  </UpvoteProvider>
);
