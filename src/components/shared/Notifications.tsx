import { capitalizeWords } from '@/helpers';
import { showNotification } from '@mantine/notifications';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';

export const SuccessNotification = (msg: string) =>
   showNotification({
      autoClose: 5000,
      title: 'Success!',
      message: capitalizeWords(msg),
      icon: <BsCheckCircleFill />,
      color: 'teal',
   });

export const ErrorNotification = (code: string | undefined, msg: string) =>
   showNotification({
      autoClose: 5000,
      title: code,
      message: msg,
      icon: <MdCancel />,
      color: 'red',
   });
