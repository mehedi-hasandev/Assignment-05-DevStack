import React, { useState } from 'react';
import type { Technology } from '../../Types/technologyTypes';

interface TechCardProps {
  tech: Technology;
  onAddToStack: (tech: Technology) => void;
  isAdded: boolean;
}

const TechCard: React.FC<TechCardProps> = ({ tech, onAddToStack, isAdded }) => {
  const [imgError, setImgError] = useState<boolean>(false);

  return (
    <div className="w-full mx-auto bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div>
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="w-10 h-10 flex items-center justify-start shrink-0">
            {imgError ? (
              <span className="text-sm font-bold text-gray-400">
                {tech.name.slice(0, 2).toUpperCase()}
              </span>
            ) : (
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                className="w-9 h-9 object-contain"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          {tech.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-50 text-pink-500">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>

        <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed line-clamp-3 mb-6">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-1">
          <span className="px-2.5 py-1 rounded bg-gray-50 text-gray-500 font-normal">
            {tech.category}
          </span>

          <span className="font-normal text-gray-500">
            {tech.difficulty}
          </span>

          <div className="flex items-center gap-1 font-medium text-gray-700">
            <span className="text-amber-400 text-sm leading-none">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
         
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-lg text-xs sm:text-sm font-medium transition-all ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              : 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 text-white active:scale-[0.99] cursor-pointer'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;