export const selectRandomArrayItem = (array: any[]): any => {
  const index: number = Math.floor(Math.random() * array.length);
  const randomItem: any = array[index];
  return randomItem;
};
