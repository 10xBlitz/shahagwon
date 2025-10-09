"use client";

import Image from "next/image";
import { useRef } from "react";
import { ImagePlus, X } from "lucide-react";

interface FileUploadProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
}

export default function FileUpload({
  files,
  onFilesChange,
  accept = "image/*",
  multiple = true,
  className = "",
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const newFiles = Array.from(selectedFiles);
    onFilesChange([...files, ...newFiles]);

    event.target.value = "";
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    onFilesChange(updatedFiles);
  };

  return (
    <div className={className}>
      {/* Image Preview */}
      <div className="mb-[16px] flex flex-row gap-4">
        {files.map((file, index) => {
          const imageUrl = URL.createObjectURL(file);
          return (
            <div key={index} className="flex flex-row items-center gap-1">
              <div className="relative inline-block">
                <Image
                  src={imageUrl}
                  alt={file.name}
                  width={100}
                  height={100}
                  className="rounded object-contain"
                />
                <div
                  onClick={() => handleRemoveFile(index)}
                  className="absolute top-1.5 right-1.5 rounded-full bg-red-600 p-[2px] shadow-lg hover:scale-110"
                >
                  <X
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    size={10}
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Upload Button */}
      <div className="mb-[16px] flex flex-row items-center justify-between">
        <ImagePlus
          size={24}
          strokeWidth={1.5}
          color="#808080"
          className="hover:cursor-pointer"
          onClick={handleFileUploadClick}
        />
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFilesChange}
        className="hidden"
      />
    </div>
  );
}