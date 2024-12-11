"use server";

import { cache } from "react";
import { ImageItem } from "./getImages";

export const getImageDetails = cache(
  async (id: string): Promise<ImageItem | null> => {
    try {
      const response = await fetch(`https://picsum.photos/id/${id}/info`, {
        cache: "no-store",
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to fetch image details:", error);
      return null;
    }
  }
);
