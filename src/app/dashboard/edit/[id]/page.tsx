import { getImageDetails } from "@/app/action/getImageDetails";
import EditImageClient from "./edit-image-client";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditImagePage({ params }: PageProps) {
  const resolvedParams = await params;
  const imageDetails = await getImageDetails(resolvedParams.id);

  return (
    <div>
      <EditImageClient
        id={resolvedParams.id}
        initialImageDetails={imageDetails}
      />
    </div>
  );
}
