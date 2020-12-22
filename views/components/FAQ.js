let FAQ = {
    render : async (FAQ_JSON) => {
        
        let view =  /*html*/`
        <section id="faq" style="padding: 2px;margin: 11px;">
        <hr class="star-dark mb-5">
        <h2 class="text-uppercase text-center" style="font-size: 48;">FAQ</h2><br>
        <div class="container">
           ${FAQelements(FAQ_JSON)}
        </div>
        <div class="container">
            <hr class="star-dark mb-5">
        </div>
    </section>
        `
        return view
    }
    , after_render: async () => {
        var acc = document.getElementsByClassName("faq");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("on");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
    }

}

let FAQelements=(FAQ_JSON)=>
{
 let view='';
FAQ_JSON.forEach(element => {
    let questionAnswer=` <div class="faqelement"><button class="btn btn-outline-secondary faq on" type="button"
    style="box-shadow: none;">${element.question}&nbsp;</button>
<div class="panel">
    <p>${element.answer}</p>
</div>
</div><br>`;
view+=questionAnswer;
    
});

return view;
}





export default FAQ;




