export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'textL'
  | 'textM'
  | 'textS'
  | 'textXS'
  | 'label';

interface FontData {
  color: string;
  fontFamily: 'Inter' | 'Lato';
  fontSize: string;
  lineHeight: string;
  fontWeight: 300 | 400 | 500 | 600 | 700;
  fontStyle?: 'normal' | 'italic';
  letterSpacing?: string;
}

export type TypographyData = { [key in TypographyVariant]: FontData };
