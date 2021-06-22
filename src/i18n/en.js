const defaultObj = {
    // APP
    APP_NAME: process.env.REACT_APP_NAME,
    APP_SHORT_NAME: process.env.REACT_APP_NAME,
    APP_SIGN_IN: 'Sign in',
  
    // <b></b> tags parse-able with the parse() plugin from react-html-parser
  
    // Notifications
    APP_NOTIFICATION_SUCCESS: 'Success',
    APP_NOTIFICATION_FAILURE: 'Something went wrong, please try again later',
    APP_CREDENTIALS_FAILURE: 'Invalid credentials, please try again',
    APP_UNAUTHORIZED_MESSAGE: 'Unauthorized to view this Application',
  
    // Nav Menu
    APP_TITLE: 'The App Title',
    APP_SHORT_TITLE: process.env.REACT_APP_NAME,
    APP_MENU_LANDING: 'Landing',
    APP_MENU_SIGN_OUT: 'Sign out',
    APP_PROFILE_TOOLTIP: 'Profile',
    APP_SELECT_LOCATION: 'Select Location',
  
    // Landing Page
    APP_LANDING_PAGE_WELCOME: 'Welcome',
  
    APP_LANDING_PAGE_TITLE: `${process.env.REACT_APP_NAME} Home`,
  
  
  
    // Tables
    APP_TABLE_MODAL_SAVE: 'Save',
    APP_TABLE_MODAL_CLOSE: 'Close',
  
    // Settings
    APP_SETTING_SAVED: 'Setting Successfully Saved!'
  }
  
  export default defaultObj;