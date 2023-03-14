import React, { ReactNode } from 'react';

import style from './Modal.module.scss';

type ModalType = {
  showModal: boolean;
  closeModal: () => void;
  children: ReactNode;
};

export const Modal = ({ showModal, closeModal, children }: ModalType) => {
  if (!showModal) return null;

  return (
    <>
      {showModal && (
        <div className={style.box}>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div className={style.container} onClick={closeModal} />
        </div>
      )}
      <div className={style.box}>{children}</div>
    </>
  );
};
