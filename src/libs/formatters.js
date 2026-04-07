
export function formatDateUK(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day:   "numeric",
    month: "long",
    year:  "numeric",
  }).format(new Date(dateString));
}

export function formatTime(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en-GB", {
    hour:   "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(dateString));
}

export function formatPhoneUK(phone) {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11) {
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
}

export function toTitleCase(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getInitials(name) {
  if (!name) return "";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function truncate(str, maxLength = 80) {
  if (!str || str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}…`;
}