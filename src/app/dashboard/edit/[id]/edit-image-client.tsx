"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ImageItem } from "@/app/action/getImages";
import { Slider } from "@/components/ui/slider";

interface EditImageClientProps {
  id: string;
  initialImageDetails: ImageItem;
}

export default function EditImageClient({
  id,
  initialImageDetails,
}: EditImageClientProps) {
  const router = useRouter();
  const [width, setWidth] = useState(initialImageDetails.width);
  const [height, setHeight] = useState(initialImageDetails.height);
  const [grayscale, setGrayscale] = useState(false);
  const [blur, setBlur] = useState(0);
  const [imageDetails] = useState<ImageItem>(initialImageDetails);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem(`image-${id}`);
    if (savedSettings) {
      const { width, height, grayscale, blur } = JSON.parse(savedSettings);
      setWidth(width);
      setHeight(height);
      setGrayscale(grayscale);
      setBlur(blur);
    }
  }, [id]);

  useEffect(() => {
    // Save settings to localStorage
    const settings = { width, height, grayscale, blur };
    localStorage.setItem(`image-${id}`, JSON.stringify(settings));
  }, [id, width, height, grayscale, blur]);

  const imageUrl = `https://picsum.photos/id/${id}/${width}/${height}${
    grayscale ? "?grayscale" : ""
  }${blur > 0 ? `${grayscale ? "&" : "?"}blur=${blur}` : ""}`;

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `image-${imageDetails.author}${width}x${height}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download image:", error);
      alert("Failed to download image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => router.back()}
        className='mb-4 text-blue-500 hover:underline'
      >
        &larr; Back to Gallery
      </button>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:w-1/2'>
          <Image
            src={imageUrl}
            alt={`Photo by ${imageDetails.author}`}
            width={width}
            height={height}
            className='max-w-full h-auto rounded shadow-lg'
          />
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-2xl font-bold mb-4'>Edit Image</h2>
          <p className='mb-4'>By {imageDetails.author}</p>
          <div className='space-y-4'>
            <div>
              <label className='block mb-2'>Width:</label>
              <input
                type='number'
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className='w-full px-3 py-2 border rounded'
              />
            </div>
            <div>
              <label className='block mb-2'>Height:</label>
              <input
                type='number'
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className='w-full px-3 py-2 border rounded'
              />
            </div>
            <div>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  checked={grayscale}
                  onChange={(e) => setGrayscale(e.target.checked)}
                  className='mr-2'
                />
                Grayscale
              </label>
            </div>
            <div>
              <label className='block mb-2'>Blur {blur}:</label>
              <Slider
                defaultValue={[blur]}
                value={[blur]}
                max={10}
                step={1}
                onValueChange={(value) => setBlur(Number(value))}
                className='my-8'
              />
            </div>
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-green-300'
            >
              {isLoading ? "Downloading..." : "Download Edited Image"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
