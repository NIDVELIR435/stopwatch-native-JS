let Hour = document.querySelector('#hour');                                                       // Переменным присвоены разные  Div в DOM дереве для
let Min = document.querySelector('#minute');                                                      // отобраджения в них цифр 
let Sec = document.querySelector('#second');

let WorkingProcess = () => {                                                                      // Алгоритм подсчета
   if (Sec.innerHTML == 'SS') {
      Sec.innerHTML = '0';
   } else if (Sec.innerHTML == "60") {
      Sec.innerHTML = '0';
      if (Min.innerHTML == 'MM') {
         Min.innerHTML = '1'
      } else if (Min.innerHTML == '60') {
         Min.innerHTML = '0';
         if (Hour.innerHTML == 'HH') {
            Hour.innerHTML = '1'
         } else if (Hour.innerHTML == '24') {
            Hour.innerHTML = '0'
         } else {
            Hour.innerHTML = Number(Hour.innerHTML) + 1;
         }
      } else {
         Min.innerHTML = Number(Min.innerHTML) + 1;
      }
   } else if (Number(Sec.innerHTML) >= 0) {
      Sec.innerHTML = Number(Sec.innerHTML) + 1;
   }
};

let SetIntervalID;                                                                                // Переменная для присвоения ий и удаления из нее финкции-интервала

let statusWorking = false;                                                                        // Переменная для присвоения булевого значения true или false. 
// Помогает оператору if else у разных функций определять, что делать. 


let StartStopFunc = () => {                                                                       // запускает процесс подсчета времени
   if (statusWorking == false) {
      SetIntervalID = setInterval(WorkingProcess, 1000);
      statusWorking = true;
   } else {
      clearInterval(SetIntervalID);
      statusWorking = false;
      Sec.innerHTML = 'SS';
      Min.innerHTML = 'MM';
      Hour.innerHTML = 'HH';
   };
};

let WaitFunc = () => {                                                                            //останавливает процесс подсчета не сбивая его
   clearInterval(SetIntervalID);
   statusWorking = false;
};
let ResetFunc = () => {                                                                           //обнуляет все значения и считает заново 
   if (statusWorking == false) {
      Sec.innerHTML = '0';
      Min.innerHTML = 'MM';
      Hour.innerHTML = 'HH';
      SetIntervalID = setInterval(WorkingProcess, 1000);
      statusWorking = true;
   } else if (statusWorking == true) {
      Sec.innerHTML = '0';
      Min.innerHTML = 'MM';
      Hour.innerHTML = 'HH';
   }
};

let StartStop = document.querySelector('#StartStop').addEventListener('click', StartStopFunc);     // обнаружение кнопок в DOM дереве
let Wait = document.querySelector('#Wait').addEventListener('click', WaitFunc);                 // и добавление им слушателей, что
let Reset = document.querySelector('#Reset').addEventListener('click', ResetFunc);                 //  выполнять действия при нажатии

