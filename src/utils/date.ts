import moment from 'moment';
import messages from '../messages'
import intl from '../intl';

export const formatDate  = (date: string) => {
    return moment(date).calendar('', {
        lastDay: `[${intl.formatMessage(messages.yesterday)} u] HH:mm`,
        sameDay: `[${intl.formatMessage(messages.today)} u ] HH:mm `,
        nextDay: `[${intl.formatMessage(messages.tomorrow)}]`,
        lastWeek: `DD/MM/YYYY`,
        nextWeek: 'dddd',
        sameElse: 'L',
      });
}

export const formatDateObj  = (date: Date) => {
  return moment.utc(date).local().format('DD/MM/YYYY')
}

export const formatDateTimeObj  = (date: Date) => {
  return moment.utc(date).local().format('DD/MM/YYYY HH:mm')
}

export const formatDatefromString  = (date: string) => {
  return moment(date).format('DD/MM/YYYY');
}

export const formatDateTimefromString  = (date: string) => {
  return moment.utc(date).local().format('DD/MM/YYYY HH:mm')
}

export const formatTime  = (date: string) => {
  return moment.utc(date).local().format('HH:mm')
}

export const formatStopwatch = (timer: number) => {
  const getSeconds = `0${(timer % 60)}`.slice(-2)
  const minutes: any = `${Math.floor(timer / 60)}`
  const getMinutes: any = `0${minutes % 60}`.slice(-2)
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

  return `${getHours} : ${getMinutes} : ${getSeconds}`
}

export const formatDateFromUnixTimestamp = (value: number, time?: boolean) => {
  return time ? moment.unix(value).format("MM/DD/YYYY HH:mm") : moment.unix(value).format("MM/DD/YYYY");
}
