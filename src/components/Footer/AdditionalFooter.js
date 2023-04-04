import * as React from 'react';
import {
  AdditionalFooterStyle,
  AdditionalFooterItem,
  AdditionalFooterLink,
} from './AdditionalFooter.styled';

export const AdditionalFooter = () => {
  return (
    <AdditionalFooterStyle>
      <AdditionalFooterItem>© 2023 All Rights Reserved.</AdditionalFooterItem>
      <AdditionalFooterLink>Terms of Service</AdditionalFooterLink>
    </AdditionalFooterStyle>
  );
};
