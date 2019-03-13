
let domine_check = document.getElementById('domine_check');

domine_check.addEventListener('click', checkInput);

function checkInput(e){

    if(e.path[0].id == 'check_button'){

        let promise = new Promise((resolve, reject) => {
            if(!e.path[0].classList.contains('button_unactive')){
                e.path[0].classList.add('button_unactive');
            }
            setTimeout(() => {
                resolve("result");
            }, 1000);
          
        });
        promise.then(
            result => {
                if(e.path[0].classList.contains('button_unactive')){
                        e.path[0].classList.remove('button_unactive');
                    }
                e.path[2].children[1].innerHTML = "Домен " + e.path[2].children[0].children[0].value + '— свободен.' + "<span class='green_underline'>Зарегистрировать за 39₽</span>";
            },
            error => {
                alert("Rejected: " + error); 
            }
        );
    }
}


let page_buttons = document.getElementById('page_buttons');

page_buttons.addEventListener('click', changePage);

function changePage(e){

    let count = 0;
    let pages = ['head', 'container', 'footer'];
    if(e.path[1].id == 'page_buttons'){

        for (let i=0; i<e.path[1].children.length; i++){
            if(e.path[1].children[i].classList.contains('page_button_active')){
                e.path[1].children[i].classList.remove('page_button_active');
            }
        }
        if(!e.path[0].classList.contains('page_button_active')){
            e.path[0].classList.add('page_button_active');
        }
    
        for (let i=0; i<e.path[1].children.length; i++){
            if (e.path[0] == e.path[1].children[i]){
                count = i;
            }
        }
        console.log(count);
        let currentPage = document.getElementById(pages[count]);
        currentPage.scrollIntoView();

        

    }
}