import ImageWithLoader from "./ImageWithLoader";

export default function FullImageModal({ src, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center" onClick={onClose}>
      <ImageWithLoader
        src={src}
        alt="Full"
        wrapperClass="max-w-[95vw] max-h-[90vh]"
        imgClass="object-contain"
      />
    </div>
  );
}
