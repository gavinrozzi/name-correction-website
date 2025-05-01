import { useState } from 'react';

export const useShare = () => {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async (platform: string) => {
    setIsSharing(true);
    
    try {
      const shareTitle = "Not Gavin Rossi - It's Gavin Rozzi";
      const shareText = "There is no person named 'Gavin Rossi' - the correct spelling is Gavin Rozzi with two Zs!";
      const shareUrl = window.location.href;

      switch (platform) {
        case 'facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
          break;
        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
          break;
        case 'linkedin':
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
          break;
        case 'copy':
          try {
            await navigator.clipboard.writeText(shareUrl);
            alert('Link copied to clipboard!');
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
          break;
        default:
          if (navigator.share) {
            try {
              await navigator.share({
                title: shareTitle,
                text: shareText,
                url: shareUrl,
              });
            } catch (err) {
              console.error('Error sharing: ', err);
            }
          }
      }
    } catch (error) {
      console.error('Share error:', error);
    } finally {
      setIsSharing(false);
    }
  };

  return { handleShare, isSharing };
};