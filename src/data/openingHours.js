/**
 * Nyitvatartás – egyetlen forrás a lábléc, a kapcsolat szekció és (később)
 * az időpontfoglaló számára.
 *
 * `ranges`: gépi formátum, [kezdet, vég] "HH:MM" párokban. Üres tömb = zárva.
 * A napok sorrendje hétfőtől vasárnapig; `weekday` az ISO számozás (1 = hétfő).
 */
export const openingHours = [
  { weekday: 1, day: 'Hétfő',     ranges: [['13:00', '20:00']] },
  { weekday: 2, day: 'Kedd',      ranges: [['08:00', '10:00'], ['13:00', '20:00']] },
  { weekday: 3, day: 'Szerda',    ranges: [['13:00', '20:00']] },
  { weekday: 4, day: 'Csütörtök', ranges: [['13:00', '18:00']] },
  { weekday: 5, day: 'Péntek',    ranges: [['13:00', '18:00']] },
  { weekday: 6, day: 'Szombat',   ranges: [] },
  { weekday: 7, day: 'Vasárnap',  ranges: [] },
]

/** Megjelenítéshez: "13:00 – 20:00" vagy "8:00 – 10:00, 13:00 – 20:00", zárt napon "Zárva". */
export function formatRanges(ranges) {
  if (!ranges.length) return 'Zárva'
  return ranges.map(([from, to]) => `${from} – ${to}`).join(', ')
}

/** Lista a sablonokhoz: { day, hours, closed }. */
export const openingHoursRows = openingHours.map((row) => ({
  day: row.day,
  hours: formatRanges(row.ranges),
  closed: row.ranges.length === 0,
}))
