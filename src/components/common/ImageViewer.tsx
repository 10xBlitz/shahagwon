"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageViewer({
  src,
  alt = "",
}: {
  src: string;
  alt: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setZoom(1);
  };

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative h-32 w-32 cursor-pointer overflow-hidden rounded"
        onClick={open}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition hover:opacity-90"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={close}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking image
          >
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              className="max-h-[90vh] max-w-[90vw] transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
            />

            {/* Zoom Controls */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-4">
              <button
                className="rounded bg-white/90 px-3 py-1 text-black shadow"
                onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
              >
                +
              </button>
              <button
                className="rounded bg-white/90 px-3 py-1 text-black shadow"
                onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}
              >
                −
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-2xl font-bold text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
