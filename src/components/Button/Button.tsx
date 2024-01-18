import React from 'react';
import './Button.scss';

interface Props {
  isLoading: boolean;
  loadMore: () => void;
}

export const Button: React.FC<Props> = ({ isLoading, loadMore }) => {
  return (
    <button
      type="button"
      className="content__button"
      onClick={loadMore}
    >
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  );
};
