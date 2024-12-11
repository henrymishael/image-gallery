import { notFound } from "next/navigation";
import { getImageDetails } from "@/app/action/getImageDetails";
import EditImageClient from "./edit-image-client";

interface PageProps {
  params: { id: string };
}

export default async function EditImagePage({ params }: PageProps) {
  const imageDetails = await getImageDetails(params.id);

  if (!imageDetails) {
    notFound();
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <EditImageClient id={params.id} initialImageDetails={imageDetails} />
    </div>
  );
}
