import React from 'react';
import { FeatureItem } from '@/components/molecules/FeatureItem';

const HowItWorksIllustration = () => (
  <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto h-[350px] sm:h-[400px] md:h-[450px]">
    {/* Decorative background circles */}
    <div className="absolute top-8 left-4 w-3 h-3 border-2 border-gray-300 rounded-full"></div>
    <div className="absolute top-20 right-8 w-4 h-4 border-2 border-gray-300 rounded-full"></div>
    <div className="absolute bottom-32 left-8 w-3 h-3 border-2 border-gray-300 rounded-full"></div>
    <div className="absolute top-12 right-16 w-2 h-2 bg-gray-300 rounded-sm"></div>
    
    {/* Main browser window */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFE5E0] rounded-2xl w-72 sm:w-80 md:w-96 h-80 sm:h-96 shadow-2xl p-4 sm:p-6">
      {/* Browser top bar */}
      <div className="bg-white rounded-xl p-3 mb-4 shadow-md">
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
        {/* Blue content box */}
        <div className="bg-blue-500 h-8 rounded"></div>
      </div>
      
      {/* Search/Input bar */}
      <div className="bg-white/60 backdrop-blur-sm border-2 border-white rounded-full h-10 mb-4"></div>
      
      {/* Gear icon - top right */}
      <div className="absolute -top-8 right-8 bg-[#00D4AA] w-16 h-16 rounded-lg flex items-center justify-center shadow-xl transform rotate-12 animate-float">
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
        </svg>
      </div>
      
      {/* Code/Terminal window - top right with blue badge */}
      <div className="absolute top-12 right-4 bg-[#00D4AA] w-28 h-32 rounded-lg shadow-xl p-2">
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="space-y-2">
          <div className="h-1.5 bg-white/80 rounded w-3/4"></div>
          <div className="h-1.5 bg-white/80 rounded w-1/2"></div>
          <div className="h-1.5 bg-white/80 rounded w-2/3"></div>
        </div>
      </div>
      
      {/* Chat bubble - left side */}
      <div className="absolute top-16 -left-6 bg-white border-2 border-gray-200 rounded-lg w-16 h-12 shadow-lg"></div>
    </div>
    
    {/* Person 1 - Left with yellow pants and blue shirt */}
    <div className="absolute bottom-8 left-8 flex flex-col items-center animate-bounce-slow z-10">
      <div className="w-12 h-12 bg-gray-900 rounded-full mb-1"></div>
      <div className="w-16 h-20 bg-blue-500 rounded-t-2xl relative">
        <div className="absolute -left-2 top-4 w-6 h-12 bg-blue-500 rounded-full transform -rotate-45"></div>
        <div className="absolute -right-2 top-4 w-6 h-12 bg-blue-500 rounded-full transform rotate-45"></div>
      </div>
      <div className="w-12 h-16 bg-yellow-400 rounded-b-lg"></div>
      <div className="flex gap-2 mt-1">
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
      </div>
    </div>
    
    {/* Person 2 - Middle with orange outfit and coin */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
      <div className="w-12 h-12 bg-gray-900 rounded-full mb-1"></div>
      <div className="relative">
        <div className="w-16 h-20 bg-orange-400 rounded-t-2xl"></div>
        <div className="absolute -right-6 top-4 w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-500 flex items-center justify-center text-yellow-600 font-bold text-xl shadow-lg">
          $
        </div>
      </div>
      <div className="w-12 h-16 bg-orange-400 rounded-b-lg"></div>
      <div className="flex gap-2 mt-1">
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
      </div>
    </div>
    
    {/* Person 3 - Right with blue pants and orange shirt */}
    <div className="absolute bottom-8 right-8 flex flex-col items-center z-10">
      <div className="w-12 h-12 bg-gray-900 rounded-full mb-1"></div>
      <div className="w-16 h-20 bg-orange-400 rounded-t-2xl relative"></div>
      <div className="w-12 h-16 bg-blue-500 rounded-b-lg relative">
        <div className="absolute -right-4 top-2 w-20 h-12 bg-yellow-400 rounded-lg shadow-lg"></div>
      </div>
      <div className="flex gap-2 mt-1">
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
      </div>
    </div>
    
    {/* Ground line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300"></div>
  </div>
);

export const Strategy: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
        </svg>
      ),
      title: 'Collect Ideas',
      description: 'Nulla vitae elit libero pharetra augue dapibus.'
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/>
        </svg>
      ),
      title: 'Data Analysis',
      description: 'Vivamus sagittis lacus augue laoreet vel.'
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: 'Magic Touch',
      description: 'Cras mattis consectetur purus sit amet.'
    }
  ];

  const technologies = [
    {
      name: 'Node.js',
      logo: (
        <div className="flex flex-col items-center gap-2">
          <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 256 282" fill="none">
            <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.163-4.072 20.58-13.005 25.638-11.533 6.6-26.323 6.279-38.316 1.192-11.2-4.722-21.528-11.311-32.205-17.264C4.764 205.426.007 197.917 0 190.005V71.025c-.116-7.643 4.362-14.985 11.12-18.753C46.768 32.977 82.34 13.56 117.939 3.595z" fill="#539E43"/>
            <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" fill="#539E43"/>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">Node.js</span>
        </div>
      )
    },
    {
      name: 'React',
      logo: (
        <div className="flex flex-col items-center gap-2">
          <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 256 228" fill="#00D8FF">
            <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.173 321.173 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"/>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">React JS</span>
        </div>
      )
    },
    {
      name: 'HTML5',
      logo: (
        <div className="flex flex-col items-center gap-2">
          <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 256 361" fill="none">
            <path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26"/>
            <path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529"/>
            <path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB"/>
            <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" fill="#000"/>
            <path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF"/>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">HTML5</span>
        </div>
      )
    },
    {
      name: 'Bootstrap',
      logo: (
        <div className="flex flex-col items-center gap-2">
          <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 256 204" fill="#7952B3">
            <path d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.453 30.67-36.545 30.67H91.109V77.759h44.709c18.608 0 31.97 9.534 31.97 26.653 0 13.359-8.312 21.15-14.904 23.13v.402c10.663 2.303 20.676 11.48 20.676 27.589Zm-55.454-13.388v24.186h16.011c8.192 0 13.283-4.005 13.283-12.144 0-7.538-4.646-12.042-12.842-12.042h-16.452Zm0-49.463v22.995h15.125c7.034 0 11.46-3.68 11.46-11.328 0-7.344-4.18-11.667-10.955-11.667h-15.63Z"/>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">Bootstrap</span>
        </div>
      )
    },
    {
      name: 'Angular',
      logo: (
        <div className="flex flex-col items-center gap-2">
          <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 256 272" fill="none">
            <path d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z" fill="#E23237"/>
            <path d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z" fill="#B52E31"/>
            <path d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z" fill="#FFF"/>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">Angular</span>
        </div>
      )
    },
    {
      name: 'React Native',
      logo: (
        <div className="flex flex-col items-center gap-2">
          <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 256 228" fill="#00D8FF">
            <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.173 321.173 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"/>
          </svg>
          <span className="text-sm md:text-base font-medium text-gray-700">React Native</span>
        </div>
      )
    }
  ];

  return (
    <>
      {/* How It Works Section */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative pb-32 sm:pb-36 md:pb-40">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            {/* Left Illustration */}
            <div className="order-2 lg:order-1">
              <HowItWorksIllustration />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 px-2 sm:px-0">
              <p className="text-[#5EBEEB] text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase mb-3 sm:mb-4">
                HOW IT WORKS?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 leading-tight">
                Everything you need on creating a business process.
              </h2>

              {/* Features List */}
              <div className="space-y-6 md:space-y-8">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wavy bottom border */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            className="w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="white"
            style={{ height: '120px', display: 'block' }}
          >
            <path d="M0,50 C120,20 180,80 300,50 C420,20 480,80 600,50 C720,20 780,80 900,50 C1020,20 1080,80 1200,50 C1320,20 1380,80 1440,50 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-[#5EBEEB] text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase mb-3 sm:mb-4">
              OUR EXPERTISE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Technologies We Work With
            </h2>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
              >
                {tech.logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
