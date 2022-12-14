export function getPlaylistId() {
  const string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let generatedId = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * string.length);
    generatedId += string.charAt(randomIndex);
  }
  return "playlist-" + generatedId;
}
export function getRandomColor() {
  function getColor() {
    const hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substr(-2);
  }
  return "#" + getColor() + getColor() + getColor();
}

export function getSong(songs, id) {
  return songs.find((s) => s.id == id);
}
