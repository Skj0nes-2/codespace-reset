function countdown() {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const timeRemaining = nextMonth.getTime() - now.getTime();
  let time = '';

  if (timeRemaining <= 0) {
    time = 'Codespace Reset';
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  time = `Reset: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  return time;
}
setInterval(() => {
  document.getElementById('countdown').innerHTML = countdown();
  document.title = countdown();
}, 1000);
