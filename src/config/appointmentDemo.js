const SLOT_START_HOUR = 9;
const SLOT_END_HOUR = 18;
const SLOT_INTERVAL_MIN = 30;
const BOOKING_DAYS_AHEAD = 14;

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function isDateInBookingRange(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + BOOKING_DAYS_AHEAD);

  const checkDate = new Date(date);
  checkDate.setHours(0, 0, 0, 0);

  return checkDate >= today && checkDate <= maxDate && !isWeekend(checkDate);
}

export function generateTimeSlots(date, branchId) {
  if (!date || !branchId) {
    return [];
  }

  const selectedDate = new Date(date);
  if (!isDateInBookingRange(selectedDate)) {
    return [];
  }

  const slots = [];
  const now = new Date();

  for (let hour = SLOT_START_HOUR; hour < SLOT_END_HOUR; hour += 1) {
    for (let minute of [0, SLOT_INTERVAL_MIN]) {
      if (hour === SLOT_END_HOUR - 1 && minute === SLOT_INTERVAL_MIN) {
        continue;
      }

      const slotDate = new Date(selectedDate);
      slotDate.setHours(hour, minute, 0, 0);

      if (slotDate <= now) {
        continue;
      }

      slots.push({
        value: slotDate.toISOString(),
        label: slotDate.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
    }
  }

  return slots;
}

export function formatAppointmentDateTime(isoString) {
  if (!isoString) {
    return '';
  }

  const date = new Date(isoString);
  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function createAppointmentId() {
  return `APT-${Date.now()}`;
}

export function getDefaultBookingDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  while (!isDateInBookingRange(date)) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}

export function isBookingDateValid(date) {
  return isDateInBookingRange(date);
}
