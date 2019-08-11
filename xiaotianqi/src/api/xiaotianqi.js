import {get} from "./request";

const key = "2b141b5aa9584d8a9fad51fe3d8bdad5"


export function getNow(city = '杭州') {
  const url = '/api/'
  const data = {
    location: city,
    key
  }
  return get(url, data)
}
