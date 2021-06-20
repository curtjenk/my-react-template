import { store } from 'react-notifications-component';
import I18n from '../../i18n/utils';

export const showSuccessNotification = (text: String) => {
  const message = text ? text : I18n.t('APP_NOTIFICATION_SUCCESS');
  store.addNotification({
    message,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3500
    }
  });
}

export const showFailureNotification = (text: String) => {
  const message = text ? text : I18n.t('APP_NOTIFICATION_FAILURE');
  store.addNotification({
    message,
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3500,
    }
  });
}