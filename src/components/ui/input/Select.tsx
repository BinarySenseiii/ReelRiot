import { Select, SelectProps } from '@mantine/core';
import { useSelectData } from '@/hooks/useSelectData';

interface CustomSelectProps<T> extends Omit<SelectProps, 'value' | 'onChange' | 'data'> {
  data: T[];
  valueKey: keyof T;
  labelKey: keyof T;
  value: string | null;
  onChange: (value: string | null) => void;
}

export function CustomSelect<T extends Record<string, any>>({
  data,
  valueKey,
  labelKey,
  value,
  onChange,
  ...props
}: CustomSelectProps<T>) {
  const selectData = useSelectData(data, { valueKey, labelKey });

  return <Select data={selectData} value={value} onChange={onChange} {...props} />;
}
