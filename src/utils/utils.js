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
