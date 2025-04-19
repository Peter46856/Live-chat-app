import React from "react";

const NoMediaFound = ({ onCreateStory }) => (
  <div className="w-full mx-auto text-center p-4 text-gray-500">
    <p>No media found</p>
    <button 
      onClick={onCreateStory} 
      className="mt-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
    >
      Create Story
    </button>
  </div>
);

export default NoMediaFound;
