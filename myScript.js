var users=[
   {name:'Avi', pin:'1234' , deposit:1000},
   {name:'Benni', pin:'1331' , deposit:10},
   {name:'shay', pin:'1476' , deposit:180}
]



function atmScript(){
    var userName = 0
    var userDetailes;
    while(!userDetailes){

        var userName = prompt("please enter your name")
        if(isNaN(userName)){
            chackValName = true
        }

        var userPin = prompt("please enter your pin ode")
        if(!isNaN(userPin)){
            chackValPin = true
        }


        if(userName === null || userPin=== null){
            return;
        }

        if(chackValName && chackValPin){
            for(var i=0;i<users.length;i++){
                if(users[i].name.toLowerCase() === userName.toLowerCase() && users[i].pin === userPin){
                    var userDetailes = users[i]
                    return userDetailes
                }
            }
        }

        console.log("you have a problem with creedntials")

    }
}


function checkValidDeposit(deposit){
    var deposit = parseInt(deposit)
    var flag = true;
    while(deposit > 0 && flag){
        deposit-=100;
        if(deposit < 0){
            deposit+=100;
            flag=false;
        }
    }
    if(deposit === 0){ 
        return true
    }
    flag = true
    while(deposit > 0 && flag){
        deposit-=50;
        if(deposit < 0){
            deposit+=50;
            flag=false;
        }
    }
    if(deposit === 0){ 
        return true
    }
    flag = true
    while(deposit > 0 && flag){
        deposit-=20;
        if(deposit < 0){
            deposit+=20;
            flag=false;
        }
    }
    if(deposit === 0){ 
        return true
    }

    return false
}




function main(){
    console.log("Welcome to JS ATM console application")
    var userDetailes = atmScript()
    if(!userDetailes){
        return;
    }
    
    var action = prompt("ATM MENU:" + "\n"+
    "Press d to Deposite Money" + "\n"+
    "Press w to Withdraw Money" + "\n"+
    "Press c to Check your Balace"+ "\n"+
    "Press q to Quit")
    
    if (action === 'd'){
        var deposit = prompt("How much would you like to Deposite?")
        if(checkValidDeposit(deposit)){
            userDetailes.deposit += parseInt(deposit) 
        }    
    }

    if(action === 'w'){
        var Withdraw = prompt("How much would you like to Withdraw?")
        if(Withdraw === "1"){
            userDetailes.deposit -= 50
        }else if(Withdraw === "2"){
            userDetailes.deposit -= 100
        }else if(Withdraw === "3"){
            userDetailes.deposit -= 150
        }else if(Withdraw === "4"){
            userDetailes.deposit -= 300
        }else{
            var Withdraw = prompt("How much would you like to Withdraw? exactly")   
            var WithdrawNumber = userDetailes.deposit - parseInt(Withdraw)
            if(WithdrawNumber < 0){
                alert("Balace cannot to minus")
            }else{
                alert("OK")
                userDetailes.deposit -= parseInt(Withdraw)
            }
        }
    }

    if(action === 'c'){
        console.log("your current is " + userDetailes.deposit)
    }

    if(action === 'q'){
        console.log("GOODBBY, HAVE A NICE DAY" + userDetailes.name)
    }



}



main()

