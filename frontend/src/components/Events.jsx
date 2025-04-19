import React from "react";

const EventsGrid = ({ media }) => {
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

export default EventsGrid;
