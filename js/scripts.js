//timer
function clock() {
    const myTimer = setInterval(myClock, 1000);
    let c = 7201; 
    function myClock() {
        --c
        const seconds = c % 60; 
        const secondsInMinutes = (c - seconds) / 60; 
        const minutes = secondsInMinutes % 60; 
        const hours = (secondsInMinutes - minutes) / 60;
        
        console.clear();
        document.getElementById("timer").innerHTML = (hours + ":" + minutes + ":" + seconds)
        if (c == 0) {
            clearInterval(myTimer);
        }
    }
}
clock()

//date
let dt = new Date();
document.getElementById("date").innerHTML = dt.getDate() +"."+(dt.getMonth() + 1)+"."+dt.getFullYear();

//mask
let elements = document.getElementsByClassName('mask');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+38(000)000-00-00',
  });
}