let Navbar = {
    render: async () => {
        let view =  /*html*/`
        <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white transparency border-bottom border-light"
        id="transmenu">
        <div class="container"><a class="navbar-brand text-success nav-link" href="/">&nbsp;ACoP Budapest</a><button
                data-toggle="collapse" class="navbar-toggler collapsed"
                data-target="#navcol-1"><span></span><span></span><span></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link" href="/#/">Home</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="/#/events">Events</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#faq">FAQ</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="/#/activities" >Activities</a>
                    
                </ul>
            </div>
        </div>
    </nav>
        `
        return view
    },
    after_render: async () => {
        $('.nav-link').click(function(e){
            e.preventDefault()
            location.hash=e.target.hash
        });
    }

}

export default Navbar;