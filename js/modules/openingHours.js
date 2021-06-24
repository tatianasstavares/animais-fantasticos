export default function initOpeningHours() {
  const openingHours = document.querySelector("[data-week]");
  const daysOfWeek = openingHours.dataset.week.split(",").map(Number);
  const hourOfWeek = openingHours.dataset.hour.split(",").map(Number);

  console.log(daysOfWeek, hourOfWeek);

  const currentData = new Date();
  const currentDay = currentData.getDay();
  const currentHour = currentData.getHours();

  const openInWeek = daysOfWeek.indexOf(currentDay) !== -1;

  const openHour = currentHour >= hourOfWeek[0] && currentHour < hourOfWeek[1];

  if (openInWeek && openHour) {
    openingHours.classList.add("opened");
  }
}
