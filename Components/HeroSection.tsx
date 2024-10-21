import React from 'react';

interface GridItem {
  src: string;  // URL or imported image source
  alt: string;  // Alt text for the image
  text?: string; // Optional text for each item
}

interface CustomizableGridProps {
  items: GridItem[]; // Array of image items
  bgColor?: string;  // Background color for the grid
  padding?: string;  // Padding for the grid
  textClasses?: string; // Custom classes for text styling
  containerClasses?: string; // Custom classes for container styling
}

const CustomizableGrid: React.FC<CustomizableGridProps> = ({
  items,
  bgColor = "bg-white",
  padding = "p-5",
  textClasses = "text-black text-xl",
  containerClasses = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",
}) => {
  return (
    <div className={`${containerClasses} ${bgColor} ${padding}`}>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={item.src} alt={item.alt} className="mb-1 w-full h-3/4" />
          <p className={`text-center ${textClasses}`}>
            {item.text || "Default placeholder text"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CustomizableGrid;
