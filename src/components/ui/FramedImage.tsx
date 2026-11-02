import type { ImageAsset } from '@typings/content';
import '@components/ui/FramedImage.css';

interface FramedImageProps {
  image: ImageAsset;
  /** CSS aspect ratio of the frame, e.g. "3 / 2". */
  aspectRatio: string;
  className?: string;
}

/** An image cropped to a fixed frame, using the image's focus point. */
export const FramedImage = ({ image, aspectRatio, className }: FramedImageProps) => {
  return (
    <div
      className={['framed-image', className].filter(Boolean).join(' ')}
      style={{ aspectRatio }}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: image.focus ?? '50% 50%' }}
      />
    </div>
  );
};
