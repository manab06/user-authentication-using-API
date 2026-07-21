export const ROUTES = {
    PUBLIC: {
        HOME: '/',
        SUCCESS:'/success',
        LOGIN:'/login',
        CONTACT:'/contact',
        ABOUT:'/about',
        PRODUCT:'/products'
    },
    PRIVATE: {
        DASHBOARD:'/dashboard',
        DELETE_ACCOUNT:'/delete-account',
    },


    ADMIN_PUBLIC: {
        LOGIN:'/alogin',
    },
    ADMIN_PRIVATE: {
        DASHBOARD:'/adashboard',
    },

} as const;