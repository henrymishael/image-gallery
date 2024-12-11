"use server";

import { cache } from "react";
import { ImageItem } from "./getImages";

export const getImageDetails = cache(async (id: string): Promise<ImageItem> => {
  const response = await fetch(`${process.env.API_URL}/id/${id}/info`);
  if (!response.ok) {
    throw new Error("Failed to fetch image details");
  }
  return response.json();
});
