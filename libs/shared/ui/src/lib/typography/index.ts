import { TypographyData } from '@whistleworthy-fe/shared/types';
import { textDefault } from '../colors';

interface TypoData extends TypographyData {
  fontFamily: string;
}

export const typography: TypoData = {
  fontFamily: 'Inter',
  h1: {
    fontFamily: 'Inter',
    color: textDefault,
    fontSize: '60px',
    lineHeight: '72px',
    fontWeight: 400,
    letterSpacing: '-1.2px',
  },
  h2: {
    fontFamily: 'Inter',
    color: textDefault,
    fontSize: '48px',
    lineHeight: '60px',
    fontWeight: 400,
    letterSpacing: '-0.96px',
  },
  h3: {
    fontFamily: 'Inter',
    color: textDefault,
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 400,
    letterSpacing: '-0.72px',
  },
  h4: {
    fontFamily: 'Inter',
    fontSize: '30px',
    color: textDefault,
    lineHeight: '36px',
    fontWeight: 400,
  },
  h5: {
    color: textDefault,
    fontFamily: 'Inter',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 400,
  },
  h6: {
    color: textDefault,
    fontFamily: 'Inter',
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 400,
  },
  textL: {
    color: textDefault,
    fontFamily: 'Inter',
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 400,
  },
  textM: {
    color: textDefault,
    fontFamily: 'Inter',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
  },
  textS: {
    color: textDefault,
    fontFamily: 'Inter',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
  },
  textXS: {
    color: textDefault,
    fontFamily: 'Inter',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
  },
  label: {
    color: textDefault,
    fontFamily: 'Inter',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
  },
};
