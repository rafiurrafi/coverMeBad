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
export const colorShade = (col, amt) => {
  col = col.replace(/^#/, "");
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? "0" : "") + r;
  const gg = (g.length < 2 ? "0" : "") + g;
  const bb = (b.length < 2 ? "0" : "") + b;

  return `#${rr}${gg}${bb}`;
};
