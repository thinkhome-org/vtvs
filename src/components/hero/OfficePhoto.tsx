import Image from "next/image";

export function OfficePhoto({
  src,
  alt,
  width,
  height,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = false,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  fill?: boolean;
}) {
  if (fill) {
    return (
      <figure className={`photo-wrap ${className}`}>
        <Image src={src} alt={alt} fill priority sizes={sizes} className="photo-img" />
      </figure>
    );
  }

  return (
    <figure className={`photo-wrap ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        sizes={sizes}
        className="photo-img"
      />
    </figure>
  );
}
