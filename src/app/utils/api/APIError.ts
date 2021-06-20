// import { endUserSession } from '../../actions';
// import { store } from '../../store';
import { showFailureNotification } from '../Notification';

const defaultFn = (error: any) => {
  const { status } = error;

  showFailureNotification('');

  switch (status) {
    case 401:
      terminateSession();
      break;
    case 403:
      terminateSession();
      break;
    // case 500:
    // case 503:
    // case 504:
    default:
    // show error modal
  }
  return error;
}

// Method to end user session, can be called on a 401
const terminateSession = async () => {
  // Dispatch endSession auth action creator to end user session
  // store.dispatch(endUserSession());
}

export default defaultFn;