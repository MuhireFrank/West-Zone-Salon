import { CONTACT } from '../data/site'

export const formatAppointmentMessage = (details) =>
  [
    'WESTZONE SALON — Appointment request',
    '',
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Service: ${details.service}`,
    `Preferred barber: ${details.barber}`,
    `Preferred date: ${details.date}`,
    `Notes: ${details.notes || 'None'}`,
    '',
    'This is a request, not a confirmed appointment.',
  ].join('\n')

export const getWhatsAppUrl = (message) => {
  const encodedMessage = encodeURIComponent(message)
  const number = CONTACT.whatsapp.replace(/\D/g, '')

  if (number) {
    return `https://wa.me/${number}?text=${encodedMessage}`
  }

  return `https://api.whatsapp.com/send?text=${encodedMessage}`
}
