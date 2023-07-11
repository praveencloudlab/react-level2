let indianClock = document.getElementById('indianClock');
let dubaiClock = document.getElementById('dubaiClock');
let usClock = document.getElementById('usClock');

let indianClockv1 = document.getElementById('indianClockv1');
let dubaiClockv1 = document.getElementById('dubaiClockv1');
let usClockv1 = document.getElementById('usClockv1');


function jsClock(props){
    let time = new Date().toLocaleTimeString('en-US',{timeZone:props});
    let template=`
        <div class='card'>
            <div class='card-header'>${props}</div>
            <div class='card-body'>
                <p>${time}</p>
            </div>
           
        </div>
    `
    return template;
}

function reactClock(props){
    let time = new Date().toLocaleTimeString('en-US',{timeZone:props});
    let template=
        <div className='card'>
            <div className='card-header'>{props}</div>
            <div className='card-body'>
                <p>{time}</p>
            </div>
        </div>
    return template;
}

setInterval(()=>{
    indianClock.innerHTML=jsClock('asia/kolkata');
    dubaiClock.innerHTML=jsClock('asia/dubai');
    usClock.innerHTML=jsClock('america/new_york');

    ReactDOM.render(reactClock('asia/kolkata'),indianClockv1);
    ReactDOM.render(reactClock('asia/dubai'),dubaiClockv1);
    ReactDOM.render(reactClock('america/new_york'),usClockv1);
},1000)

