import getFullYear, { getFooterCopy, getLatestNotification } from './utils';

test('gets the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

test('gets proper footer message', () => {
  expect(getFooterCopy(true)).toBe('ALX');
  expect(getFooterCopy(false)).toBe('ALX main dashboard');
});

test('gets the latest notification correctly', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
