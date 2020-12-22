let Header = {
    render: async (image, title, description) => {
        let view =  /*html*/`
        <header class="masthead text-white text-center"
        style="background:url('${image}')no-repeat center center;background-size:cover;">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 mx-auto">
                    <h1 class="mb-5">${title}</h1>
                    <p>${description}</p>
                </div>
            </div>
        </div>
    </header>
        `
        return view
    },
    after_render: async () => { }

}

export default Header;