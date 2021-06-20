import dayjs from 'dayjs';

export const formatDate = (date: string | number | Date | dayjs.Dayjs | undefined) => {
  return dayjs(date).format('MM-D-YY');
}

export const formatReverseDate = (date: string | number | Date | dayjs.Dayjs | undefined) => {
  return dayjs(date).format('YYYY-MM-DD');
}

export const formatDateWithFullYear = (date: string | number | Date | dayjs.Dayjs | undefined) => {
  return dayjs(date).format('MM-D-YYYY');
}

export const checkSameDay = (date: string | number | Date | dayjs.Dayjs) => {
  return dayjs().isSame(date, 'day');
}

export const formatDateAndTime = (date: string | number | Date | dayjs.Dayjs | undefined) => {
  return dayjs(date).format('M-D-YY, h:MM A');
}

export const getDateToday = () => {
  return dayjs().startOf('day').format('YYYY-MM-DD');
}

export const getFileDateToday = () => {
  return dayjs().startOf('day').format('DD-MM-YYYY');
}

export const getLastWeekDate = () => {
  // Return string format for date-range widget
  // return dayjs().startOf('day').subtract(1, 'week')['$d'];
}