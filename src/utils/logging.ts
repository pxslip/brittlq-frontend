type Loggable = unknown | string | object | number | Array<Loggable>;

function log(...things: Loggable[]): void {
  things.forEach((thing) => console.log(thing));
}

function error(...things: Loggable[]): void {
  things.forEach((thing) => console.error(thing));
}

export default {
  log,
  error,
};
