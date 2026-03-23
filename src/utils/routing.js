export const ROUTES = {
  LANDING: "/",
  EMPLOYER: {
    BASE: "/employer",
    LOGIN: "/employer/auth/login",
    SIGNUP: "/employer/auth/signup",
    FORGOT_PASSWORD: "/employer/auth/forgot-password",
  },
  LABOUR: {
    BASE: "/labour",
    LOGIN: "/labour/auth/login",
    SIGNUP: "/labour/auth/signup",
    FORGOT_PASSWORD: "/labour/auth/forgot-password",
  },
};

export const getAuthRoutes = (role) => {
  if (role === "employer") {
    return ROUTES.EMPLOYER;
  }
  if (role === "labour") {
    return ROUTES.LABOUR;
  }
  return ROUTES;
};

export const PROTECTED_ROUTES = {
  EMPLOYER_DASHBOARD: "/employer/dashboard",
  LABOUR_DASHBOARD: "/labour/dashboard",
};
