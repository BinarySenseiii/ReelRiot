const arrayToString = (arr: string[], length: number = 3) =>
  arr !== undefined && arr.slice(0, length).join(', ');

export default arrayToString;
