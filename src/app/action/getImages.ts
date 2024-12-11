"use server";

import { cache } from "react";

export interface ImageItem {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const getImages = cache(
  async (page: number = 1, limit: number = 12): Promise<ImageItem[]> => {
    const response = await fetch(
      `${process.env.API_URL}/v2/list?page=${page}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    return response.json();
  }
);
