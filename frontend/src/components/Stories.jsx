/*
import React from "react";

const StoriesGrid = ({ media }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {media.map((item, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-lg">
          {item.type === "image" ? (
            <img src={item.src} alt={item.alt || "Image"} className="w-full h-auto object-cover" />
          ) : (
            <video controls className="w-full h-auto object-cover">
              <source src={item.src} type={item.format || "video/mp4"} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export default StoriesGrid;


*/

import React from "react";
import { useUpdateStore } from "../store/useUpdateStore";


const StoriesGrid = ({ media }) => {
  const { sendStory, getStories, isSendingStory } = useUpdateStore();
  const handleStoryUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await sendStory({ profilePic: base64Image });
    };
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* Upload button as the first element */}
      <button
        onClick={handleStoryUpload}
        className="flex items-center justify-center w-full h-24 bg-gray-200 rounded-lg shadow-lg hover:bg-gray-300 transition"
      >
        + Upload Story
      </button>
      
      {media.map((item, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-lg">
          {item.type === "image" ? (
            <img src={item.src} alt={item.alt || "Image"} className="w-full h-auto object-cover" />
          ) : (
            <video controls className="w-full h-auto object-cover">
              <source src={item.src} type={item.format || "video/mp4"} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export default StoriesGrid;
