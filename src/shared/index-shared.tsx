import dayjs from 'dayjs';

export const dayjsLocale = (date: string) => {
  return dayjs(date).locale('fr').format('D MMMM YYYY');
};

export const truncateStr = (msg: string, length = 50): string => {
  const result = msg.slice(0, length) + (msg.length > length && '...');
  return result;
};

export const truncateName = (MessageChannel: string, length = 10): string => {
      const result =
        MessageChannel.slice(0, length) +
        (MessageChannel.length > 10 ? '...' : '');
      return result;
    };