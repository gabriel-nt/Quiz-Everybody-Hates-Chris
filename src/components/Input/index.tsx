import React from 'react';
import { InputBase } from './styles';

type Props = {
  [key: string]: any;
};

const Field: React.FC<Props> = ({ value, handleChangeInput, ...props }) => (
  <InputBase {...props} value={value} onChange={handleChangeInput} />
);

export default Field;
