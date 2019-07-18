const LOCALE = {
    THB_UNIT: "THB",

    CANCEL: "Cancel",
    YES: "Yes",
    NO: "No",
    CREATE: "Create",
    SAVE: "Save",
    CLOSE: "Close",
    EDIT: "Edit",
    UNDO: "Undo",
    CROP: "Crop",
    SEARCH: "Search",
    CLEAR: "Clear",
    UPLOAD: "Upload",
    SEND_REQUEST: "Send a request",
    RESET_PASSWORD: "Reset Password",
    CREATE_PASSWORD: "Create Password",
    VIEW: "View",
    BACK: "Back",
    VIEW_AND_EDIT: "View / Edit",
    DELETE: "Delete",

    SIDEBAR_USERS: "Users",
    SIDEBAR_PRIVILEGES: "Privileges",
    SIDEBAR_BRANDS: "Brands",
    SIDEBAR_CUSTOMERS: "Customers",

    USERS_MANAGER_PAGE_TITLE: "Users Manager",
    PRIVILEGES_MANAGER_PAGE_TITLE: "Privileges Manager",
    BRANDS_MANAGER_PAGE_TITLE: "Brands Manager",
    CUSTOMERS_MANAGER_PAGE_TITLE: "Customers Manager",

    COMFIRM_LOGOUT_MESSAGE: "Are you sure you want to logout?",
    CONFIRM_DELETE_USER_MESSAGE: "Are you sure you want to delete this user?",
    CONFIRM_DISCARD_CHANGES_MESSAGE: "Are you sure you want to discard all changes?",
    FIRST_TIME_LOGIN_MESSAGE: "First time logged in, please create your password",
    NO_PERMISSION_MESSAGE: "You have no permissions, you will be automatically logging out.",
    NO_INTERNET_CONNECTION_MESSAGE: "No internet connection",
    CANNOT_CONNECT_TO_SERVER_MESSAGE: "System cannot process the request at the moment",

    LOGGED_IN_SUCCESSFUL_MESSAGE: "Logged in successfully!",
    LOGGED_OUT_SUCCESSFUL_MESSAGE: "Logged out successfully!",
    REQUESTED_RESET_PASSWORD_MESSAGE: "Requested reset password!",
    PASSWORD_HAS_BEEN_RESET_MESSAGE: "Your password has been reset!",
    PASSWORD_CREATED_MESSAGE: "Your password has been created, please log in again.",
    BRAND_PINNED_MESSAGE: "Brand pinned!",
    CREATED_USER_SUCCESSFUL_MESSAGE: "Created user successfully!",
    UPDATED_USER_SUCCESSFUL_MESSAGE: "Updated user successfully!",
    REMOVED_USER_SUCCESSFUL_MESSAGE: "User has been removed!",
    UPLOADED_IMAGE_SUCCESSFUL_MESSAGE: "Uploaded image successfully!",
    CREATED_PRIVILEGE_SUCCESSFUL_MESSAGE: "Created privilege successfully!",
    UPDATED_PRIVILEGE_SUCCESSFUL_MESSAGE: "Updated privilege successfully!",

    CREATE_NEW_USER: "New User",
    CREATE_NEW_PRIVILEGE: "New Privilege",

    CREATE_NEW_USER_TITLE: "Create New User",
    EDIT_USER_TITLE: "Edit User",
    USER_DETAIL_TITLE: "User Detail",
    CONTACT_DETAIL_TITLE: "Contact Detail",
    CREATE_NEW_PRIVILEGE_TITLE: "Create New Privilege",
    PRIVILEGE_DETAIL_TITLE: "Privilege Detail",
    EDIT_PRIVILEGE_TITLE: "Edit Privilege",
    CROP_IMAGE_TITLE: "Crop Image",
    RESET_PASSWORD_TITLE: "Reset Password",
    FORCE_RESET_PASSWORD_TITLE: "Create Your Password",
    CUSTOMER_INFORMATION_TITLE: "Customer Information",
    ADDRESS_INFORMATION_TITLE: "Addresses Information",

    USER_ID: "User ID",
    USER_ROLE: "Role",
    USER_NAME: "User's Name",
    USER_DEPARTMENT: "Department",
    USER_EMAIL: "Email",
    USER_CONTACT_NUMBER: "Contact Number",

    PRIVILEGE_CODE: "Privilege Code",
    PRIVILEGE_NAME: "Privilege Name",
    PRIVILEGE_BUSINESS: "Business",
    PRIVILEGE_START_DATE: "Start Date",
    PRIVILEGE_END_DATE: "End Date",
    PRIVILEGE_DATE_RANGE: "Date Range",
    PRIVILEGE_STATUS: "Status",
    PRIVILEGE_MESSAGE_BODY_1: "Message Body 1",
    PRIVILEGE_MESSAGE_BODY_2: "Message Body 2",
    PRIVILEGE_IMAGE: "Image",

    PRIVILEGE_IMAGE_UPLOAD_ERROR_TYPE: "You can only upload (PNG, JPG) file!",
    PRIVILEGE_IMAGE_UPLOAD_ERROR_SIZE: "Image must smaller than 2MB!",

    RESET_PASSWORD_STEP_1: "Request",
    RESET_PASSWORD_STEP_2: "Set New Password",
    RESET_PASSWORD_STEP_3: "Done",

    RESET_PASSWORD_STEP_1_DESCRIPTION: "Please input your email to request resetting password.",
    RESET_PASSWORD_STEP_3_DESCRIPTION: "Your password has been reset.",
    PASSWORD: "Password",
    TEMPORARY_PASSWORD: "Temporary Password",
    NEW_PASSWORD: "New Password",
    CONFIRM_PASSWORD: "Confirm Password",
    PLEASE_CONFIRM_PASSWORD: "Please confirm your password!",
    FORGOT_PASSWORD: "Forgot password?",
    LOGGING_IN: "Logging In",
    LOGIN: "Login",
    LOGOUT: "Logout",

    BRAND_LOGO: "Logo",
    BRAND_NAME: "Name",
    PIN_TO_FIRST: "Pin to first",
    PINNED_TO_FIRST: "Pinned to first",
    ACTION_EFFECT_IMMEDIATELY: "This action will be effected immediately.",

    CUSTOMER_FULLNAME: "Customer Name",
    CUSTOMER_WALLET_ID: "Wallet ID",
    CUSTOMER_STATUS: "Status",
    CUSTOMER_EMAIL: "Email",
    CUSTOMER_CITIZEN_ID: "Citizen ID",
    CUSTOMER_MOBILE_NUMBER: "Mobile Number",
    CUSTOMER_FIRSTNAME: "Firstname",
    CUSTOMER_LASTNAME: "Lastname",
    get CUSTOMER_FIRSTNAME_EN() {
        return `${LOCALE.CUSTOMER_FIRSTNAME} (EN)`
    },
    get CUSTOMER_LASTNAME_EN() {
        return `${LOCALE.CUSTOMER_LASTNAME} (EN)`
    },
    CUSTOMER_REGISTERED_DATE: "Registered",
    CUSTOMER_LAST_SUSPENDED: "Last Suspended",
    CUSTOMER_BALANCE: "Balance",
    CUSTOMER_MAXIMUM_BALANCE: "Maximum Balance",
    CUSTOMER_DAILY_EXPENSES: "Daily Expenses",
    CUSTOMER_MONTHLY_EXPENSES: "Monthly Expenses",
    CUSTOMER_BIRTHDAY: "Date of Birth",
    CUSTOMER_WALLET_TYPE: "Wallet Type",
    CUSTOMER_WALLET_CARD_NUMBER: "Wallet Card No",
    CUSTOMER_LOYALTY_CARD_NUMBER: "Loyalty Card No",
    CUSTOMER_CIVIL_REGISTRATION_STATUS: "Civil Registration Status",
    CUSTOMER_DIH_MATCH: "DIH Match",
    CUSTOMER_KYC_STATUS: "KYC Status",
    CUSTOMER_KYC_CHANNEL: "KYC Channel",
    CUSTOMER_KYC_DATE: "KYC Date",

    CUSTOMER_ACTIVITIES: "Activities",
    CUSTOMER_CARD_LIST: "Card List",
    CUSTOMER_CARD_ACTIVITIES: "Activities",
    PRESENT_ADDRESS: "Present",
    CITIZEN_ADDRESS: "Citizen",
    WORK_ADDRESS: "Work",
    BLUE_CARD_ADDRESS: "Blue Card",

    ADDRESS_OCCUPATION: "Occupation",
    ADDRESS_WORK_PLACE: "Work Place",
    ADDRESS: "Address",
    ADDRESS_LINE_1: "Address",
    ADDRESS_SUBDISTRICT: "Subdistrict",
    ADDRESS_DISTRICT: "District",
    ADDRESS_PROVINCE: "Province",
    ADDRESS_ZIPCODE: "Zipcode",

    CARD_NUMBER: "Card No.",
    CARD_TYPE: "Card Type",
    CARD_CREATED_DATE: "Created Date",
    CARD_STATUS: "Status",
    ACTIVITY_DATE: "Date",
    ACTIVITY_ACTION: "Trans. Code",
    ACTIVITY_TRACKING_NUMBER: "Tracking No.",
    ACTIVITY_DELIVERY: "Delivery",
    ACTIVITY_SHIPPING_ADDRESS: "Address",
    ACTIVITY_STATUS: "Status",

    ACTIVITY_SEARCH_FROM: "From Date",
    ACTIVITY_SEARCH_TO: "To Date",

    get USER_ID_EXTRA_LABEL() {
        return `${LOCALE.USER_ID} can only cantains a-z, 0-9, and underscroll.`
    },
    get PRIVILEGE_CODE_EXTRA_LABEL() {
        return `${LOCALE.PRIVILEGE_CODE} can only cantains a-z, A-Z, 0-9, underscroll.`
    },
    get PASSWORD_EXTRA_LABEL() {
        return `${LOCALE.PASSWORD} must contains at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.`
    },

    FUNC_PLEASE_INPUT: (text) => `Please input ${text}!`,
    FUNC_PLEASE_SELECT: (text) => `Please select ${text}!`,
    FUNC_PLEASE_UPLOAD: (text) => `Please upload ${text}!`,
    FUNC_MUST_AT_LEAST_CHAR: (text, num) => `${text} must have at least ${num} characters!`,
    FUNC_MAXIMUM_CHAR: (num) => `Maximum ${num} characters`,
    FUNC_CONFIRM_PIN_BRAND_TO_FIRST: (brand) => `Are you sure you want to pin '${brand}' to first?`,
    FUNC_WALLET_DETAIL_TITLE: (walletID) => `Wallet Detail (ID: ${walletID})`
}

export default LOCALE
