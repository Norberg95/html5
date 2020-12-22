let Form = {
    render: async (title) => {
        let view =`
            <!-- Subscribe Section -->
                        <div class="position-relative text-center rounded"
                            style="display: none; background: url('assets/img/yannik-mika-GjFbKfI874o-unsplash.jpg'); background-size:cover;">
                            <div class="container space-2 space-bottom-lg-4">
                                <!-- Title -->
                                <div class="w-md-60 mx-md-auto mb-5 mb-md-7 text-white">
                                    <h2>Join as ${title}</h2>
        
        
        
                                </div>
                                <!-- End Title -->
        
                                <!-- Subscribe Form -->
                                <div class="w-md-75 w-lg-50 mx-md-auto">
                                    <form class="mb-3">
        
                                        <div class="form-row">
                                            <div class="col-sm-12 mb-2">
        
                                            <mgt-people-picker id="picker1" show-max="4"></mgt-people-picker>
        
                                            </div>
                                        </div>
        
        
        
        
                                        <div class="form-row">
                                            <div class="col-sm-12 mb-2">
        
                                                <div class="input-group input-group-pill">
        
                                                    <input type="text" class="form-control organizationInput" name="email"
                                                         placeholder="Your team/organization"
                                                        aria-label="Your team" required>
                                                </div>
        
                                            </div>
        
                                        </div>
                                        <div class='form-row'>
        
        
                                            <div class="btn-group btn-group-toggle col-md-8  " data-toggle="buttons">
                                                <label class="btn btn-dark active">
                                                    <input type="radio" name="fullTime" class="YesRadio" value="eventList"
                                                        checked> Full-Time
                                                </label>
                                                <label class="btn btn-dark">
                                                    <input type="radio" name="fullTime" class="NoRadio"> Part-Time
                                                </label>
                                            </div>
                                            <div class="col-sm-4 ">
                                                <button type="reset" id=SubBtn class="btn btn-primary btn-pill btn-wide"
                                                    >Subscribe</button>
                                            </div>
                                        </div>
        
                                    </form>
                                </div>
                                <!-- End Subscribe Form -->
                            </div>
                        </div>
                        <!-- End Subscribe Section --></div>
            `
        
        return view
    },
    after_render: async (title) => {
        $('#SubBtn').click(function(e){
            let fullTime;
            if ($('.YesRadio')[0].checked) {
                fullTime = "Yes";
            }
            else {
                fullTime = "No"
            }
            fetch("/acopList", {
                method: "POST",
                body: JSON.stringify({
                  
                    "Email": document.querySelector("#picker1").selectedPeople[0].mail,
                    "Name": document.querySelector("#picker1").selectedPeople[0].displayName,
                    "Role": title,
                    "Organization": $('.organizationInput')[0].value,
                    "Full_Time_Role":fullTime




                }),
                headers: { "Accept": "application/json; odata=verbose", "Content-Type": "application/json;odata=verbose"},
                cardinentals: 'same-origin'
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data)
                });

        });
      
    }

}

export default Form;