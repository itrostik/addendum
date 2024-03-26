export default function getTime(timestamp: number) {
  const date = new Date(timestamp);
  const now = new Date();

  if (date.toDateString() === now.toDateString()) {
    return `сегодня в ${date.getHours()}:${date.getMinutes()}`;
  } else if (
    date.toDateString() === new Date(now.getTime() - 86400000).toDateString()
  ) {
    return `вчера в ${date.getHours()}:${date.getMinutes()}`;
  } else {
    if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleString("ru-RU", {
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } else {
      return date.toLocaleString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  }
}
