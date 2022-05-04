export function formatCount(duration) {
  if (duration < 60) {
    return duration + 'mn';
  } else if (duration % 60 === 0) {
    return duration / 60 + 'h';
  } else {
    return Math.floor(duration / 60) + 'h and ' + (duration % 60) + 'mn';
  }
}
