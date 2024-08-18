document.querySelector('.cross').style.display = 'none'
document.querySelector('.ham').addEventListener("click" ,() =>{
    document.querySelector('.side').classList.toggle('sidebarGo')
    if(document.querySelector('.side').classList.contains('.sidebarGo')) {

        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }

    else   {
        document.querySelector('.cross').style.display = 'none'

         document.querySelector('.ham').style.display = 'inline'
    
    }




})