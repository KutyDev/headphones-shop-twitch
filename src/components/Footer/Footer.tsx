import React from 'react';
import { useTranslation } from 'react-i18next';

type FooterProps = {};
export const Footer = (props: FooterProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const currentLanguageCode = i18n.language;
    const langToChange = currentLanguageCode === 'en' ? 'pl' : 'en';
    i18n.changeLanguage(langToChange);
  };
  return <div onClick={changeLanguage}>{t('Change language')}</div>;
};
