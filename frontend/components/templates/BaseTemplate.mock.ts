import { IBaseTemplate } from './BaseTemplate';

const base: IBaseTemplate = {
  sampleTextProp: 'One',
  sampleNumberProp: 1,
};

const alt: IBaseTemplate = {
  sampleTextProp: 'Zero',
  sampleNumberProp: 0,
};

export const mockBaseTemplateProps = {
  base,
  alt,
};
