import React from 'react';
import type { Technology } from '../Types/technologyTypes';

interface StackSidebarProps {
  stack: Technology[];
  onRemoveFromStack: (id: string, name: string) => void;
  onClearStack: () => void;
}

const StackSidebar: React.FC<StackSidebarProps> = ({
  stack,
  onRemoveFromStack,
  onClearStack,
}) => {
  return (
    <aside className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-sm  top-24">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={onClearStack}
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100/80 border border-rose-200 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="py-12 px-4 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h4 className="text-sm font-semibold text-gray-800">Your stack is empty</h4>
          <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
            Click "Add to Stack" on any card to assemble your tools.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-white border border-gray-200/80 p-1.5 flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="truncate">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {item.name}
                  </h4>
                  <span className="text-[11px] font-medium text-gray-500">
                    {item.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromStack(item.id, item.name)}
                className="w-7 h-7 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-white border border-transparent hover:border-gray-200 flex items-center justify-center transition-all shrink-0 cursor-pointer"
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default StackSidebar;