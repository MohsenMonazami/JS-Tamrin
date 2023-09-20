//14 

const Bank = [
    {userName: "Mohsen" , Balance: "70000" , Visit: 0, Password: '1381'},
    {userName: "Hamed" , Balance: "80000" , Visit: 0, Password: '1375'},
    {userName: "Nadiya" , Balance: "50000" , Visit: 0, Password: '1381'},
    {userName: "Gilda" , Balance: "90000" , Visit: 0, Password: '1387'},
]

const UserName = document.getElementById('username');
const password = document.getElementById('password');
const Submit = document.getElementById('submit');
const info = document.getElementById('resault');
const Replace = document.getElementById('count')


Submit.addEventListener("click" , (e)=>{
    e.preventDefault();

    Bank.map((account) =>{
        if(account.userName === UserName.value){
            if(account.Password === password.value){
                account.Visit += 1;

                Replace.textContent=`This account visited: ${account.Visit} times`;

                const Resault = document.createElement('div');
                Resault.classList.add('mt-3')
                Resault.innerHTML=`Your current balance is: ${account.Balance}$`

                info.appendChild(Resault);
                
            }
        }
        
    })
})