export const paths = {
  home: '/',
  auth: {
    custom: {
      signIn: '/auth/custom/sign-in',
      signUp: '/auth/custom/sign-up',
      resetPassword: '/auth/custom/reset-password',
    },
    auth0: {
      callback: '/auth/auth0/callback',
      signIn: '/auth/auth0/sign-in',
      signUp: '/auth/auth0/sign-up',
      signOut: '/auth/auth0/sign-out',
      profile: '/auth/auth0/profile',
    },
    cognito: {
      signIn: '/auth/cognito/sign-in',
      signUp: '/auth/cognito/sign-up',
      signUpConfirm: '/auth/cognito/sign-up-confirm',
      newPasswordRequired: '/auth/cognito/new-password-required',
      resetPassword: '/auth/cognito/reset-password',
      updatePassword: '/auth/cognito/update-password',
    },
    firebase: {
      signIn: '/auth/firebase/sign-in',
      signUp: '/auth/firebase/sign-up',
      resetPassword: '/auth/firebase/reset-password',
      recoveryLinkSent: '/auth/firebase/recovery-link-sent',
      updatePassword: '/auth/firebase/update-password',
    },
    supabase: {
      callback: '/auth/supabase/callback',
      signIn: '/auth/supabase/sign-in',
      signUp: '/auth/supabase/sign-up',
      signUpConfirm: '/auth/supabase/sign-up-confirm',
      resetPassword: '/auth/supabase/reset-password',
      recoveryLinkSent: '/auth/supabase/recovery-link-sent',
      updatePassword: '/auth/supabase/update-password',
    },
  },
  dashboard: {
    overview: '/dashboard',
    analytics: '/dashboard/analytics',
    crypto: '/dashboard/crypto',
    logistics: '/dashboard/logistics',
    smartHome: '/dashboard/smart-home',
    tasks: '/dashboard/tasks',
    blank: '/dashboard/blank',
    customers: {
      list: '/dashboard/customers',
      create: '/dashboard/customers/create',
      details: (customerId: string) => `/dashboard/customers/${customerId}`,
    },
    invoices: {
      list: '/dashboard/invoices',
      create: '/dashboard/invoices/create',
      details: (invoiceId: string) => `/dashboard/invoices/${invoiceId}`,
    },
    orders: {
      list: '/dashboard/orders',
      create: '/dashboard/orders/create',
      details: (orderId: string) => `/dashboard/orders/${orderId}`,
    },
    products: {
      list: '/dashboard/products',
      create: '/dashboard/products/create',
      details: (productId: string) => `/dashboard/products/${productId}`,
    },
    team: {
      members: {
        list: '/dashboard/team/members',
        invite: '/dashboard/team/members?invite=true',
        details: (memberId: string) => `/dashboard/team/members?memberId=${memberId}`,
      },
      permissions: '/dashboard/team/permissions',
    },
    settings: {
      profile: '/dashboard/settings',
      billing: '/dashboard/settings/billing',
      security: '/dashboard/settings/security',
    },
  },
  docs: 'https://docs.lotru.devias.io',
  purchase: 'https://mui.com/store/items/lotru',
} as const;
