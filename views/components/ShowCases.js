let ShowCases = {
    render : async () => {
        
        let view =  /*html*/`
        <section class="showcase">
        <div class="container-fluid p-0">
                ${ShowCase('assets/img/nathan-dumlao-VJHb4QPBgV4-unsplash.jpg','Our vision', 'Be the to go place for Agile collaboration in Hungary', 'normal')}
                ${ShowCase('assets/img/GettyImages-1129571739.jpg','Our Mission', 'Become an enabler for Agile and Digital Transformation within Hungary', 'reverse')}
                ${ShowCase('assets/img/GettyImages-1193713033.jpg','What we do', 'Today the Agile movement is strong. Changing the way we work has reached so many people and teams and Agile can get more value of it.<br>But still the question why, how to, and how did others approach it are present and important to be asked. Find yourself among Agile practitioners from across the GBC who come together for new ideas community collaboration, and an opportunity to create essential connections.', 'normal')}

                
                </div>
        </div>
        </section>


        `
        return view
    }
    , after_render: async () => {
       
    }

}



let ShowCase=(image, title, description, order)=>{
    let orderImage=order=="normal"? 'order-lg-2': 'order-lg-1';
    let orderText=order=="normal"? 'order-lg-1': 'order-lg-2';
    return `
    <div class="row no-gutters">
    <div class="col-lg-6 ${orderImage} text-white showcase-img"
        style="background-image:url(&quot;${image}&quot;);background-position: center;">
        <span></span></div>
    <div class="col-lg-6 my-auto ${orderText} showcase-text">
        <h2>${title}</h2>
        <p class="lead mb-0">${description}</p>
    </div>
    </div>
    `
}



export default ShowCases;



