import React, { useState } from 'react';

import close from '../../../assets/png/close.png';
// import remove from '../../../assets/png/delete.png';

import style from './User.module.scss';
import { UserPropsType } from './UserPropsType';

import { ReturnComponentType } from 'common';
import { Modal } from 'components';
import { DataModal } from 'enums';
import { deleteUser, useTypedDispatch } from 'state';

export const User = ({ user, search }: UserPropsType): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClickDelete = () => {
    dispatch(deleteUser(user.id));
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  const formatString = (oldString: string) => {
    if (!search) {
      return oldString;
    }

    return (
      <span>
        {oldString.split(search).reduce((prev: any, current, i) => {
          if (!i) {
            return [current];
          }

          return prev.concat(
            <span key={search + current} className={style.user_content_selected}>
              {search}
            </span>,
            current,
          );
        }, [])}
      </span>
    );
  };

  return (
    <div className={style.user}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <img
        src={close}
        onClick={onClickDelete}
        alt="remove"
        className={style.user_remove}
      />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={openModal} className={style.user_content}>
        <div className={style.user_content_info}>{formatString(user.name)}</div>
        <div className={style.user_content_info}>{formatString(user.username)}</div>
        <div className={style.user_content_info}>{formatString(user.email)}</div>
      </div>

      <div>
        <Modal closeModal={closeModal} showModal={showModal}>
          <div className={style.modal}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <img
              src={close}
              onClick={closeModal}
              alt="close"
              className={style.modal_close}
            />
            <div className={style.modal_content}>{DataModal.ADDRESS}</div>
            <div>
              {DataModal.CITY}: {user.address.city}
            </div>
            <div>
              {DataModal.STREET}: {user.address.street}
            </div>
            <div>
              {DataModal.SUITE}: {user.address.suite}
            </div>
            <br />
            <div className={style.modal_content}>{DataModal.COMPANY}</div>
            <span>{user.company.name}</span>
          </div>
        </Modal>
      </div>
    </div>
  );
};
