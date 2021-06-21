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
    APP_LANDING_PAGE_SELECT_APP: 'Select an Application',
    APP_LANDING_PAGE_SELECT_LOCATION: 'Please select a location to continue',
    APP_LANDING_PAGE_TITLE: `${process.env.REACT_APP_NAME} Home`,
  
    // Dashbord
    APP_DASHBOARD_TIN_TITLE: 'Tin File',
    APP_DASHBOARD_GENERATED_ON: 'Generated On',
    APP_DASHBOARD_TEN99_FILE: '1099 File',
    APP_DASHBOARD_SENT_ON: 'Sent On',
  
    // Location Selector
    APP_LOCATION_SELECTOR_SELECT: 'Please Select a location',
  
    // Authenticated Route
    APP_AUTHENTICATED_ROUTE_TITLE: 'Authenticated Route',
  
    APP_NAV_LINK_DASHBOARD: 'Dashboard',
    //
    APP_NAV_LINK_PAYMENTS: 'Payments',
    //
    APP_NAV_LINK_SUBLINK_SEARCH_PAYMENTS: 'Search Payments',
    APP_NAV_LINK_SUBLINK_SEARCH_PAYERS: 'Search Payers',
    APP_NAV_LINK_SUBLINK_SEARCH_RECIPIENTS: 'Search Recipients',
    //
    APP_NAV_LINK_IRS_TINS: 'IRS TINs',
  
    // Generate TIN File
    APP_NAV_SUBLINK_GENERATE_TIN: 'Generate TIN File',
    APP_NAV_GENERATE_TIN_MATCH: 'Match TINs',
    APP_NAV_GENERATE_TIN_MATCH_DESC: `Pressing the "Match" button below will launch the process to find matching TINS. Once complete, any new TIN records created will be displayed.`,
    APP_NAV_GENERATE_TIN_FILE: 'Generate TIN File',
    APP_NAV_GENERATE_TIN_FILE_DESC: 'A TIN file will be generated that meets the criteria below. If there are no records matching this criteria, your file will be blank. Once the file is generated, it is immediately available for download.',
    APP_NAV_GENERATE_TIN_ERROR_FILE: 'Generate TIN Error File',
    APP_NAV_GENERATE_TIN_ERROR_FILE_DESC: 'A TIN error file will be generated.',
  
    // Process Response
    APP_NAV_SUBLINK_PROCESS_RESPONSE: 'Process Response File',
    //
    APP_NAV_SUBLINK_ERROR_EXPORT: 'Generate Error Export File',
    APP_NAV_SUBLINK_ERROR_EXPORT_TITLE: 'Generate Error File',
    //
    APP_NAV_SUBLINK_SUMMARY_EMAIL: 'Taxable Income Summary Email',
    APP_NAV_SEND_SUMMARY_EMAIL_TITLE: 'Send Taxable Income Summary Email',
    APP_NAV_SEND_SUMMARY_EMAIL_SUBTITLE: 'An email will be sent to the following Operators that have received payments and/or prizes from Chick-fil-A, Inc., and the aggregate total does not reach $600.',
    //
    APP_NAV_LINK_1099s: '1099s',
    //
    APP_NAV_SUBLINK_BULK_UPLOAD: 'Bulk Upload',
    //
    APP_NAV_SUBLINK_GENERATE_BULK_UPLOAD_ERROR: 'Generate Bulk Upload Error',
    //
    APP_NAV_SUBLINK_GENERATE_CONVEY: 'Generate Convey File',
    APP_NAV_SUBLINK_GENERATE_CONVEY_DESCRIPTION: 'A file will be generated based on the Year selected. Once the file is generated, it will be downloaded immediately.',
    //
    //
    APP_NAV_SUBLINK_GENERATE_CONVEY_FINAL: 'Convey Final',
    APP_NAV_SUBLINK_GENERATE_CONVEY__FINAL_DESCRIPTION: 'After convey file has been generated and sent to convey for printing, we upload this file back to the system.',
    //
    APP_NAV_SUBLINK_CLEAR_CONVEY_FINAL: 'Clear Convey Final',
    APP_NAV_SUBLINK_CLEAR_CONVEY_FINAL_DESCRIPTION: 'Action that clears the Convey Final Table entirely.',
    //
    APP_NAV_SUBLINK_LOAD_OPERATOR_DATA: 'Load Operator Data',
    //
    APP_NAV_LINK_SETTINGS: 'Settings',
  
    // Dashboard
    APP_DASHBOARD_TIN_ERROR_EMAIL_SENT: 'Selected Tin Errors Email Sent',
  
    // Dashboard Table
    APP_DASHBOARD_TABLE_MODAL_TITLE: 'Add comment to this TIN error',
  
    // Payments Table
    APP_PAYMENTS_TABLE_PAYMENT_UPDATED: 'Updated Payment Details',
  
    // Tables
    APP_TABLE_MODAL_SAVE: 'Save',
    APP_TABLE_MODAL_CLOSE: 'Close',
  
    // Settings
    APP_SETTING_SAVED: 'Setting Successfully Saved!'
  }
  
  export default defaultObj;