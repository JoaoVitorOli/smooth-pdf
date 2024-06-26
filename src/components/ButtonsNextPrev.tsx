import { Button } from '@geist-ui/core';
import { ChevronRight, ChevronLeft } from '@geist-ui/icons';

export function ButtonsNextPrev() {
  return (
    <div className='absolute z-20 left-0 bottom-5 w-full flex justify-between px-5'>
      <Button
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        w={2 / 5}
        iconRight={<ChevronLeft />}
        className='opacity-60 transition-all duration-200 hover:opacity-100'
      />

      <Button
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        w={2 / 5}
        iconRight={<ChevronRight />}
        className='opacity-60 transition-all duration-200 hover:opacity-100'
      />
    </div>
  );
}
