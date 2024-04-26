const input = document.querySelector('#clientInputCardnum');

/** Валидация цифр при вводе*/
input.addEventListener('keypress', function (evt) {
  if (evt.keyCode < 48 || evt.keyCode > 57) evt.preventDefault();
});


/** Оформление вывода по шаблону */
input.addEventListener('input', function (evt) {
  const pattern = '**** **** **** ****';
  let value = input.value;
  value = getCleanValue(value);
  value = getPatternedValue(value, pattern);
  input.value = value;
});

/** Возвращает очищенную строку (только цифры)*/
function getCleanValue (string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if ( +string[i] ) newString += string[i];
  }
  return newString;
}

/** Возвращает оформленную по шаблону строку*/
function getPatternedValue (string, pattern) {
  let newString = '';
  let counter = 0;
  
  for (let i = 0; i < pattern.length; i++) {
    if ( !string[counter] ) continue;
    if (pattern[i] === '*') {
      newString += string[counter];
      counter++;
      continue;
    } 
    newString += pattern[i];
  }
  
  return newString;
}
