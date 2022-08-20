let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

console.log(str);

const str1 = str.replace('ПОНЕДЕЛЬНИК', 'MONDAY').
          replace('ВТОРНИК', 'TUESDAY').
          replace('СРЕДА', 'WEDNESDAY').
          replace('ЧЕТВЕРГ', 'THURSDAY').
          replace('ПЯТНИЦА', 'FRIDAY').
          replace('СУББОТА', 'SATURDAY').
          replace('ВОСКРЕСЕНЬЕ', 'SUNDAY');

console.log(str1);

const weekdaysTranslationEnRU = {
  'ПОНЕДЕЛЬНИК': 'MONDAY',
  'ВТОРНИК': 'TUESDAY',
  'СРЕДА': 'WEDNESDAY3',
  'ЧЕТВЕРГ': 'THURSDAY',
  'ПЯТНИЦА': 'FRIDAY',
  'СУББОТА': 'SATURDAY',
  'ВОСКРЕСЕНЬЕ': 'SUNDAY'
}



function autoCorrect(text, correction) {
    const reg = new RegExp(Object.keys(correction).join("|"), "g");
    return text.replace(reg, (matched) => correction[matched]);
}

const str2 = autoCorrect(str, weekdaysTranslationEnRU);

console.log(str2);
