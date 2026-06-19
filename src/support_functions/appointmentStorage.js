const STORAGE_KEY = 'clinic_appointments';

function readAppointments() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAppointments(appointments) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
}

export function saveAppointment(record) {
  const appointments = readAppointments();
  appointments.unshift(record);
  writeAppointments(appointments);
  return record;
}

export function getAllAppointments() {
  return readAppointments();
}

export function getAppointmentById(id) {
  return readAppointments().find((appointment) => appointment.id === id) || null;
}

export function getAppointmentsForUser({ userId, email }) {
  const appointments = readAppointments();

  return appointments.filter((appointment) => {
    if (userId != null && appointment.userId != null) {
      return appointment.userId === userId;
    }

    if (email && appointment.userEmail) {
      return appointment.userEmail.toLowerCase() === email.toLowerCase();
    }

    return false;
  });
}
