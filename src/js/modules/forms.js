import checkNumInputs from './checkNumInputs';

const url = "assets/server.php";


const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');


    const message = {
        loading: 'Загрузка, пожалуйста подождите',
        success: 'Заявка отправлена, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    checkNumInputs('input[name="user_phone"]');


    async function postData(url, data){
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    form.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();
            let mess = document.createElement('div');
            mess.classList.add('status');
            mess.textContent = message.loading;
            item.appendChild(mess);


            let data = new FormData(item);
            if(item.getAttribute('data-calc') === 'end'){
                for(let key in state){
                    data.append(key, state[key]);
                }
            }
            


            postData(url, data)
            .then((response) => {
                mess.textContent = message.success;
                console.log(response);
            })
            .catch((err) => {
                mess.textContent = message.failure;
                console.log(err);
            })
            .finally(() => {
                setTimeout(() => {
                    mess.remove();
                }, 3000);
            });

            inputs.forEach(item => {
                item.value = "";
            });
        });
    });

};

export default forms;