export default function aboutMe() {

    const btns = document.querySelectorAll(".aboutMe");
    const category = document.querySelectorAll(".category");
    let newState = '';

    Array.from(btns).forEach(element => {
        element.addEventListener('click', () => {
            Array.from(category).forEach(e => {
                if (element.innerText === e.classList[0]) {

                    let count = 0;
                    let oldState = e.classList.value;
                    count = oldState.search('none');
                    newState = count > 0 ? '' : 'none';

                    let aaya = Array.from(category).filter((ele) => { return ele != e })

                    if (newState == '') {
                        e.classList.remove("none");
                        aaya.forEach(aayaa => {
                            aayaa.classList.add("none");
                        });
                    } else {
                        e.classList.add(newState);
                    }
                }
            })
        })
    });

}