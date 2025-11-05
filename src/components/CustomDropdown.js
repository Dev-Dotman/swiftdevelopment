"use client";
import { useState, useRef, useEffect } from 'react';

export default function CustomDropdown({ label, options, value, onChange, placeholder = "Select" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <label className="text-white text-sm font-medium mb-2 block uppercase tracking-wide">
        {label}
      </label>
      
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b-2 border-white/30 text-white py-2 text-left focus:outline-none focus:border-yellow-400 transition-colors flex items-center justify-between group"
      >
        <span className={value ? 'text-white' : 'text-white/60'}>
          {value || placeholder}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div className={`absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 overflow-hidden transition-all duration-300 z-50 ${
        isOpen ? 'opacity-100 translate-y-0 max-h-60' : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'
      }`}>
        <div className="py-2 max-h-60 overflow-y-auto custom-scrollbar">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-4 py-3 transition-all duration-200 ${
                value === option 
                  ? 'bg-yellow-400/20 text-yellow-400' 
                  : 'text-white hover:bg-white/10 hover:text-yellow-400'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
