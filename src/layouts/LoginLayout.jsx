import React, { PureComponent, Fragment } from "react";
import withRouter from "umi/withRouter";
import { setLocale } from 'umi-plugin-react/locale'
import zhCN from "suid/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import { SuidLocaleProvider } from 'suid';

import { userUtils, } from '@/utils';

const { getCurrentLocale, } = userUtils;

const languages = {
  'en-US': zhCN,
  'zh-CN': enUS,
};

@withRouter
class LoginLayout extends PureComponent {

  getLang = () => {
    const locale = getCurrentLocale() || "zh-CN";
    setLocale(locale);
    return locale;
  };

  render() {
    const locale = this.getLang();
    const { children } = this.props;
    return (
      <Fragment>
        <SuidLocaleProvider locale={languages[locale]} antdLocale={locale}>
          {children}
        </SuidLocaleProvider>
      </Fragment>
    );
  }
}

export default LoginLayout;
