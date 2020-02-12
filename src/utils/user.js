import { utils } from 'seid';

const { sessionStorage, localStorage } = utils.storage;
const { CONST_GLOBAL } = utils.constants;
const { CURRENT_USER, TOKEN_KEY, CURRENT_LOCALE } = CONST_GLOBAL;

/** 用户信息保存到session */
export const setCurrentUser = user => {
  sessionStorage.set(CURRENT_USER, user);
};

/** 获取当前用户信息 */
export const getCurrentUser = () => sessionStorage.get(CURRENT_USER);

export const getCurrentLocale = () => localStorage.get(CURRENT_LOCALE);

export const setCurrentLocale = locale => {
  localStorage.set(CURRENT_LOCALE, locale);
};

/** sid保存到session */
export const setSessionId = sid => {
  sessionStorage.set(TOKEN_KEY, sid);
};

/** 获取当前sid */
export const getSessionId = () => sessionStorage.get(TOKEN_KEY);

/** 根据键清空 */
export const clearUserInfo = () => sessionStorage.clear([CURRENT_USER, TOKEN_KEY]);