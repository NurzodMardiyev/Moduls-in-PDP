var year = +prompt();
var age = 2023 - year;
if (age < 18) {
  alert("siz energetik olishingiz mumkin emas");
} else if (18 <= age && age < 60) {
  alert("siz energrtik ola olasiz");
} else {
  alert("mumkin emas");
}
