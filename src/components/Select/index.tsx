import { FC } from 'react';
import Select, { ISelectProps } from './select';
import Option, { IOptionProps } from './option';

export type ISelect = FC<ISelectProps> & {
  Option: FC<IOptionProps>;
};

const SelectComponent = Select as ISelect;
SelectComponent.Option = Option;

export default SelectComponent;
