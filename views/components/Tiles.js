import Form         from '../components/Form.js'
let Tiles = {
    render : async () => {
        
        let view =  /*html*/`
        <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row d-flex justify-content-between">
                ${Tile('assets/img/users-solid.svg','Product owner', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.')}
                ${Tile('assets/img/link-solid.svg','Scrum Master', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.')}
                ${Tile('assets/img/seedling-solid.svg','Local comittee', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.')}

                
                </div>
            </div>
        </section>


        `
        return view
    }
    , after_render: async () => {
        $('.openForm').click(async function(e){
            $.fancybox.open(await Form.render(e.target.dataset.title));
            await Form.after_render(e.target.dataset.title);
            //$('#Form').innerHTML=Form(e.target.dataset.title);
        });
    }

}



let Tile=(image, title, description)=>{
    return `
    <div class="col-lg-3 border-bottom border-dark" data-bs-hover-animate="pulse">

            <div class="mx-auto  mb-5 mb-lg-0 mb-lg-3">
                <div class="d-flex "><img class="mx-auto" src="${image}" width="80"></div>
                <h3>${title}</h3>
                <p class="lead mb-0">${description}</p>
                <a data-title="${title}" href="javascript:;" class="btn btn-outline-primary openForm">Join</a>
            </div>

        </div>
    `
}



export default Tiles;

