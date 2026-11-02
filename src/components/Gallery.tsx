import type { CaptionedImage } from '@typings/content';
import { FramedImage } from '@components/ui/FramedImage';
import '@components/Gallery.css';

interface GalleryProps {
  items: readonly CaptionedImage[];
  className?: string;
}

/** Two-column grid of captioned photos; one column on small screens. */
export const Gallery = ({ items, className }: GalleryProps) => {
  return (
    <div className={['gallery', className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <figure key={item.caption} className="gallery__figure">
          <FramedImage image={item.image} aspectRatio="4 / 3" />
          <figcaption className="gallery__caption">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};
