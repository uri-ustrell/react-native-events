import moment from 'moment';
import Constants from 'expo-constants';

const { manifest } = Constants;
const host = manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(':').shift().concat(':3000')
  : 'pessebrescastellar.com/expo2019';

const url = `http://${host}/events`;

export function getEvents() {
  try {
    return fetch(url)
      .then(res => res.json())
      .then(events => events.map(event => ({ ...event, timer: Date.now() })));
  } catch (error) {
    console.log(error);
  }
}

export function formatDateTime(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('H A on D MMM YYYY');
}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('D MMM YYYY');
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
  return {
    days: parseInt(duration.as('days')),
    hours: duration.get('hours'),
    minutes: duration.get('minutes'),
    seconds: duration.get('seconds'),
  };
}