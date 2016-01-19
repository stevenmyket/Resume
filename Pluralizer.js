var pluralizer = function (noun, number) {
  if (number === 1) {
    console.log (number + " " + noun);
  } else if (number > 1) {
    console.log (number + " " + noun + "s");
  }
}

pluralizer ("cat", 3);