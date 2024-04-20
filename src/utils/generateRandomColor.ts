export function generateRandomColor() {
  // Generate random color code in hexadecimal format
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  localStorage.setItem("avatarColor", color);
  return color;
}
