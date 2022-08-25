const hour = document.getElementById('hour');
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const amPmEl = document.getElementById('amPm')


function timeUpdate(){
   let h = new Date().getHours();
   let s = new Date().getSeconds();
   let m = new Date().getMinutes();
   let ampm = "AM"
   if (h>12){
      h=h-12;
      ampm = 'PM'
   }
   
   h=h<10? '0'+ h:h;
   m=m<10? '0'+m:m;
   s = s<10? '0'+s:s;

   hour.innerText = h
   minute.innerText = m;
   second.innerText =s;
   amPmEl.innerText = ampm;
   setTimeout(()=>{ timeUpdate()},1000)
}

timeUpdate()