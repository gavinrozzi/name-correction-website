import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  darkMode?: boolean;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, darkMode = false }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-[164px] h-[164px] rounded-full p-[3px] bg-gradient-to-br from-orange-500 to-teal-500 shadow-md">
        <div className="w-full h-full rounded-full overflow-hidden bg-white">
          <img
            src={src}
            alt={alt}
            width={400}
            height={400}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className={`mt-3 text-center text-lg font-medium ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>Gavin Rozzi</p>
    </div>
  );
};

export default ProfileImage;