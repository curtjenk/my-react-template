// import { endUserSession } from '../../actions';
// import { store } from '../../store';
import globalState from '../../../contexts/GlobalStore';
import I18n from '../../../i18n/utils';
import { showFailureNotification } from '../Notification';

const defaultFn = (error: any) => {
  const { status } = error.response;
  let message = '';

  switch (status) {
    case 401:
      message = I18n.t('APP_CREDENTIALS_FAILURE');
      terminateSession();
      break;
    case 403:
      message = I18n.t('APP_UNAUTHORIZED_MESSAGE');
      terminateSession();
      break;
    // case 500:
    // case 503:
    // case 504:
    default:
    // show error modal
  }
  showFailureNotification(message);
  // return error;
}

// Method to end user session, can be called on a 401 or 403
const terminateSession = async () => {
  globalState.isAuthenticated.set(false);
}

export default defaultFn;