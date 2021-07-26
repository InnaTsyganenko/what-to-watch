export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = '50px';
  alertContainer.style.left = '50px';
  alertContainer.style.padding = '30px 13px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ff5330';
  alertContainer.style.border = '2px solid white';
  alertContainer.style.color = 'white';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 9000);
};

export function LightenDarkenColor(color, amount) {
  return (`#${color.replace(/^#/, '').replace(/../g, (col) =>
    (`0${Math.min(255, Math.max(0, parseInt(col, 16) + amount)).toString(16)}`).substr(-2))}`);
}
