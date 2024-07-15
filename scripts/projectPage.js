export default function projectPage() { 
    const title = document.querySelectorAll(".pName");
    const img = document.querySelectorAll(".img");

    Array.from(title).forEach(element => {
        element.addEventListener('click',()=>{
            console.log(element.id);
            Array.from(img).forEach(e =>{
                if(e.id === element.id){
                    const visiblity = e.getAttribute('data-img-visiblity');
                    const newVisiblity = visiblity === 'hidden' ? 'visible' : 'hidden';
                    e.setAttribute('data-img-visiblity', newVisiblity);
                }
            })
        })
    });


}
