import { Badge, Input, Popover } from '@geist-ui/core';

export function PagesCount() {

  return (
    <div className='absolute z-30 left-[50%] bottom-5 -translate-x-[50%]'>
      <Popover
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        content={Content}
        placement='top'
        trigger='hover'
      >
        <Badge
          className='opacity-50 cursor-default transition-all duration-200 hover:opacity-100'
          type='secondary'
        >
          <p className="text-white">
            1 / 324
          </p>
        </Badge>
      </Popover>
    </div>
  );
}

function Content() {
  return (
    <div className='flex items-center gap-4 px-3'>
      <p>Page:</p>
      <Input
        w={3}
        placeholder="1"
        type='secondary'
        scale={2 / 3}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </div>
  );
}

