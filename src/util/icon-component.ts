export const iconComponentSharedDefaults = {
  primaryColor: 'var(--gray)',
  tertiaryColor: 'var(--light-gray)',
  fillColor: 'var(--white)'
}
const genNum = (vals:string[]):string => {
  const n =
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  if (!vals.some((l) => l == n)) {
    return n
  } else {
    return genNum(vals)
  }
}
export const uniqueIds = (num: number) => {
  let vals:string[] = []
  for (let i = 0; i < num; i++) {
    vals.push(genNum(vals))
  }
  return vals
}
export type IconComponentItem = { key: string, icon: any };
export type ImageItemsItem = {img:string, size:1|2|3, desc:string, similar:string[], url:string};
