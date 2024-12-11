import { notFound } from "next/navigation";
import { getImageDetails } from "@/app/action/getImageDetails";
import EditImageClient from "./edit-image-client";

interface PageProps {
  params: Promise<{ id: string }>; // params is a Promise
}

export default async function EditImagePage({ params }: PageProps) {
  // Use `await` to unwrap `params`
  const { id } = await params;

  const imageDetails = await getImageDetails(id);

  if (!imageDetails) {
    notFound();
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <EditImageClient id={id} initialImageDetails={imageDetails} />
    </div>
  );
}
