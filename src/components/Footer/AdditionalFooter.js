import * as React from 'react';
import { useSelector } from 'react-redux';
import { getMode } from '../../redux/theme/themeSelector';
import {
  AdditionalFooterStyle,
  AdditionalFooterItem,
  AdditionalFooterLink,
  FooterLeaves,
} from './AdditionalFooter.styled';

export const AdditionalFooter = () => {
  const { mode } = useSelector(getMode);
  return (
    <AdditionalFooterStyle>
      <AdditionalFooterItem mode={mode}>
        © 2023 All Rights Reserved.
      </AdditionalFooterItem>
      <AdditionalFooterLink mode={mode}>Terms of Service</AdditionalFooterLink>
      <FooterLeaves />
    </AdditionalFooterStyle>
  );
};
