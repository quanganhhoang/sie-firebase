import './styles.scss';

import React from 'react';
import { AccountInfoPage } from './AccountInfoPage/AccountInfoPage';
import { Button } from '../../components/Button/Button';
// eslint-disable-next-line max-len
import { HorizontalTitle } from '../../components/HorizontalTitle/HorizontalTitle';
import { Modal } from '../../components/Modal/Modal';
import { ResetPasswordForm } from './ResetPasswordForm/ResetPasswordForm';

/**
 * Component for Account page.
 *
 * @component
 * @return {object} (
 *   <AccountPage>
 * )
 */
export const AccountPage = () => {
  return (
    <div>
      <HorizontalTitle
        eyebrow={'Account'}
        title={'Personal Information'}
        content={
          'Here\'s an overview of what\'s going on your application. ' +
          'You can review your active experiments, ' +
          'check reports and analyze real-time data.'
        }
      ></HorizontalTitle>
      <AccountInfoPage></AccountInfoPage>
      <Button
        className="account-page__delete"
        modifierClasses="button--small"
        isButton={true}
        text="Delete My Account"
      ></Button>
      <Modal buttonText="Reset Password">
        <ResetPasswordForm></ResetPasswordForm>
      </Modal>
    </div>
  );
};
