import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  darkMode?: boolean;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, darkMode = false }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-[160px] h-[160px] rounded-full overflow-hidden shadow-md">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
      <p className={`mt-3 text-center text-lg font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Gavin Rozzi</p>
    </div>
  );
};

export default ProfileImage;