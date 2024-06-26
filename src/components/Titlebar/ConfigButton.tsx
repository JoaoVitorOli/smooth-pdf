import { Checkbox, Modal, Tooltip } from '@geist-ui/core';
import { MoreHorizontal } from '@geist-ui/icons';
import { Info } from '@geist-ui/icons';
import { useState } from 'react';

export function ConfigButton() {
  const [modalState, setModalState] = useState(false);

  const closeHandler = () => {
    setModalState(false);
    console.log('closed');
  };

  return (
    <div className='w-fit h-fit ml-4 my-auto'>
      <button
        className='flex items-center px-1 transition-all duration-200 rounded-md hover:bg-[#eaeaea]/10'
        onClick={() => setModalState(true)}
      >
        <MoreHorizontal />
      </button>

      <Modal visible={modalState} onClose={closeHandler}>
        <Modal.Content>
          <Checkbox
            checked={true}
            scale={1.2}
            type="success"
            className=''
          >
            <div className='flex items-center justify-center gap-2'>
              Active translate (Google Translate API)

              <Tooltip
                text={'You can select the text you want to translate, and a box with the translated text will appear.'}
              >
                <button className='p-1 rounded-md transition-all duration-200 hover:bg-[#eaeaea]/10'>
                  <Info size={20} />
                </button>
              </Tooltip>
            </div>
          </Checkbox>
        </Modal.Content>
        <Modal.Action
          passive
          placeholder={'Ok'}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onClick={() => setModalState(false)}
        >
          <p>
            Ok
          </p>
        </Modal.Action>
      </Modal>
    </div>
  );
}