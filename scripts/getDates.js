const currentYear = new Date().getFullYear();
document.querySelector(".copyYear").textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;