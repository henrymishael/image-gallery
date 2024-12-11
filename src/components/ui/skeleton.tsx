export default function SkeletonLoader() {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden animate-pulse'>
      <div className='w-full h-48 bg-gray-300'></div>
      <div className='p-4'>
        <div className='h-4 bg-gray-300 rounded w-3/4'></div>
      </div>
    </div>
  );
}
