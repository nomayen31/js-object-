const nayok ={
        name:'Sakib Khan',
        id:121,
        address:'movie cinema',
        isSingle:true,
        friends:['Apu','raj','salman','ammir'],
        movie:[
            {name:'No.1', year:2002},{name:'king khan', year:2018}
        ],
        act:function() {
            console.log('acting like sakib khan');
        },
        car:{
            brand:'tasla',
            price:5000000,
            made:2025,
            menufacturer:{
                name:'tesla',
                ceo:'elon mask',
                country:"usa"
            }
        }
    }


console.log(nayok.car);
nayok.act();

