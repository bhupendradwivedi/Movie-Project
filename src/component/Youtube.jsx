

import React from 'react';
import ReactPlayer from 'react-player/youtube';

const TrailerModal = ({ trailerUrl, onClose }) => {
  if (!trailerUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="relative w-[90%] h-[80%] max-w-4xl">
        <button
          className="absolute top-0 right-0 text-white text-3xl p-2"
          onClick={onClose}
        >
          ✖
        </button>
        <ReactPlayer
          url={trailerUrl}
          controls
          playing
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default TrailerModal;
