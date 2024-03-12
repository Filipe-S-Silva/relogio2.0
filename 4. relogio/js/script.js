const clock = setInterval(() => {

    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let s = new Date().getSeconds();

    let date = new Date().getDate();
    let mes = new Date().getMonth() + 1;
    let ano = new Date().getFullYear();



    if (hr < 10) {
        hr = '0' + hr
    }

    if (min < 10) {
        min = '0' + min
    }

    if (s < 10) {
        s = '0' + s
    }
    
    if (date < 10) {
        date = '0' + date
    }

    if (mes < 10) {
        mes = '0' + mes
    }

    if (ano < 10) {
        ano = '0' + ano
    }


    if (hr < 12 && hr > 5) {
        
        document.getElementById('sun').src = '../img/sol.png'

        document.getElementById('mensager').textContent = "Bom dia!!"
        
        document.querySelector('body').setAttribute('class', 'morning')
        
    } else if(hr < 18 &&  hr >= 12) {
        
        document.getElementById('sun').src = '../img/sol_Lua.png'
        
        document.getElementById('mensager').textContent = "Boa tarde!!"
        
        document.querySelector('body').setAttribute('class', 'afternoon')
        
    } else{
        document.getElementById('sun').src = '../img/lua.png'
        
        document.getElementById('mensager').textContent = "Boa noite!!"
        
        document.querySelector('body').setAttribute('class', 'night')
        
    }


    //datas

    document.querySelector('#date').textContent = date;
    document.querySelector('#month').textContent = mes;
    document.querySelector('#year').textContent = ano

    // horas 

    document.getElementById('hours').textContent = hr
    document.getElementById('minutes').textContent = min
    document.getElementById('seconds').textContent = s
})