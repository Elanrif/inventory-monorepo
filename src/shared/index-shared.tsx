import dayjs from "dayjs";

export const daysLocale = (data: string) => {
    return dayjs(data).locale("fr").format("DD MMMM YYYY");
};


export const truncateStr = (msg: string, length = 50): string => {
  const result = msg.slice(0, length) + (msg.length > length && "...");
  return result;
};