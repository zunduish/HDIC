import { base_url } from '~/consts/const'
export function imageExistCheck(value) {
  let tvr = "/default-img.svg";
  if (value !== null && value !== undefined){
    if (value !== ""){
      tvr = base_url + value;
    }
  }
  return tvr;
}
export function imageBackground(value) {
  let tvr = "/images/no-image-background.svg";
  if (value !== null && value !== undefined){
    if (value !== ""){
      tvr = base_url + value;
    }
  }
  return tvr;
}
