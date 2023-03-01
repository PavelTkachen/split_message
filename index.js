/**
 * Решение задачи с приблизительной сложностью O(2n) так как приходится пробегать циклом дважды по одному списку, а с учетом использования сплита все 3n
 * но в данной задаче не предвидется сверхбольшого количества элементов в массиве, поэтому данным показателем я пренебрег
 */

/**
 * Функция получения количества символов для проверки длины отрезка сообщения уитывая текущее значение отношения фрагмента сообщения к общему количеству сообщений 
 * здесь:
 *  "3" - это количество символов которое уходит на подстроку " k/";
 *  "n" вычисляется как длина количества символов в индексе;
 */
function getCountSymbol(fragmentCounter) {
  return 3 + fragmentCounter.toString().length
}

function splitMsg(msg, limit = 140) {
  // проверяем если длина сообщения меньше лимита то просто оборачиваем его в массив не разделяя на части так как в этом нет необходимости
  if (msg.length <= limit) return [msg];
  // разделяем строку на массив строк
  const wordsByMsg = msg.split(" ");
  // создаем пустой объект в котором будут хранится раздельные по лимиту фрагменты
  const fragments = {};
  // создаем изменяемую переменную текущего фрагмета в итерации и переменную которая хранит порядковый номер фрагмента
  let fragment = "";
  let fragmentCounter = 0;
  /**
   * запускаем цикл в котором проверяем что суммарная длина уже заполненой части фрагмента + 
   * длина итерируемого элемента(в нашем случае это одно слово) + 
   * длина постфикса меньше лимита
   * если это так то прибавляем word к fragment, иначе записываем fragment в fragments по ключу fragmentCounter
   * далее проходим с помощью map по fragments и дописываем постфикс каждому элементу и собираем конечный массив, который в итоге возвращает функция
   */
  wordsByMsg.forEach(word => {
    if (fragment.length + word.length + getCountSymbol(fragmentCounter) < limit) {
      fragment += `${word} `;
    } else {
      fragments[fragmentCounter] = fragment;
      fragment = `${word}`;
      fragmentCounter++;
    }
  });
  fragments[fragmentCounter] = fragment;
  const keysfragments = Object.keys(fragments);
  return keysfragments.map((item, index) => {
    return `${fragments[item].trim()} ${index + 1}/${fragmentCounter + 1}`;
  });
}



// console.log(splitMsg(`Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit amet posuere risus`));

function splitMsg2(msg, limit = 140){
  if(msg.length <= limit) return msg[0];
  

}