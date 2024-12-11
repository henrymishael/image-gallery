/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { getImages } from "@/app/action/getImages";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SkeletonLoader from "@/components/ui/skeleton";
interface ImageItem {
  id: string;
  author: string;
  width: number;
  height: number;
  download_url: any;
}

export default function ImageGallery() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [page]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=12`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      setImages([]);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setImages([]);
  };

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {loading &&
          [...Array(12)].map((_, index) => (
            <SkeletonLoader key={`skeleton-${index}`} />
          ))}
        {!loading &&
          images.map((image) => (
            <Link
              href={`dashboard/edit/${image.id}`}
              key={image.id}
              className='block'
            >
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <Image
                  src={image.download_url}
                  alt={`Photo by ${image.author}`}
                  width={300}
                  height={200}
                  className='w-full h-48 object-cover'
                />
                <div className='p-4 md:p-2'>
                  <p className='text-sm text-gray-600 text-nowrap truncate'>
                    {image.author}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className='mt-8 flex gap-5 justify-center'>
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className='px-3 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed'
        >
          <ChevronLeft />
        </button>
        <span className='py-2'>{page}</span>
        <button
          onClick={handleNextPage}
          className='px-3 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 '
        >
          <ChevronRight />
        </button>
      </div>
      {loading && <p className='mt-8 text-center'>Loading...</p>}
    </div>
  );
}
