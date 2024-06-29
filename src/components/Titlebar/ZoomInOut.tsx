import { ZoomIn, ZoomOut } from '@geist-ui/icons';

export function ZoomInOut() {
  return (
    <div className='w-fit h-fit ml-4 my-auto flex gap-2'>
      <button
        className='flex items-center p-1 transition-all duration-200 rounded-md hover:bg-[#eaeaea]/10'
      >
        <ZoomIn size={20} />
      </button>
      <button
        className='flex items-center p-1 transition-all duration-200 rounded-md hover:bg-[#eaeaea]/10'
      >
        <ZoomOut size={20} />
      </button>
    </div>
  );
}