window.addEventListener('load', (e)=>{
    class Main {
        constructor(){
            this.init()
        }

        init() {
            const btns = document.querySelectorAll('[data-target]');
            const modal = document.querySelector('.modal');

            if(modal){
                const close = modal.querySelector('.close');
                const overlay = modal.querySelector('.overlay');
                
                btns.forEach( btn => {
                    this.addEvent(btn, this.add , modal);
                })

                this.addEvent(close, this.remove , modal);
                this.addEvent(overlay, this.remove , modal);
            }

        }

        addEvent(element, action, target){
            element.addEventListener('click', (e)=> {
                e.preventDefault();

                action(target);
            });
        }

        add(element) {
            element.classList.add('showModal')
        }

        remove(element) {
            element.classList.remove('showModal')
        }


    }

    new Main();

});