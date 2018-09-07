export default class Reminder {
  constructor({ time, note, colour = 'yellow' }) {
    this.time = time;
    this.note = note;
    this.colour = colour;
  }
}
