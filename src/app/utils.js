import { ZONE_OPTIONS } from './models';

export function computePrice(duration, zoneName) {
  const selectedZone = ZONE_OPTIONS.find((zone) => zone.name === zoneName);
  return ((selectedZone.priceUnity * duration) / 60).toFixed(2) + '€';
}

export function formatCount(duration) {
  if (duration < 60) {
    return duration + 'mn';
  } else if (duration % 60 === 0) {
    return duration / 60 + 'h';
  } else {
    return Math.floor(duration / 60) + 'h and ' + (duration % 60) + 'mn';
  }
}
