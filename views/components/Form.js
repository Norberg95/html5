let Form = {
	render: async (title) => {
		let view = `
            <!-- Subscribe Section -->
                        <div class="position-relative text-center rounded"
                            style="display: none; background-image: linear-gradient(to left, rgb(58, 97, 134), rgb(137, 37, 62)); background-size:cover;">
                            
                            <section id="contact">
                                <div class="section-content">
                                    <h1 class="section-header">Get in touch as<span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> ${title}</span></h1>
                            
                                </div>
                                <div class="contact-section">
                                <div class="container">
                                    <form>
                                        <div class="col-md-6 form-line">
                                            <div class="form-group">
                                                <label for="exampleInputUsername">Your name</label>
                                                <input type="text" class="form-control" id="" placeholder=" Enter Name">
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail">Email Address</label>
                                                <input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id">
                                            </div>	
                                            <div class="form-group">
                                                <label for="telephone">Mobile No.</label>
                                                <input type="tel" class="form-control" id="telephone" placeholder=" Enter 10-digit mobile no.">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for ="description"> Message</label>
                                                <textarea  class="form-control" id="description" placeholder="Enter Your Message"></textarea>
                                            </div>
                                            <div>
                                                <button type="reset" id=SubBtn class="btn btn-default"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </section>

                        </div>
                        <!-- End Subscribe Section --></div>
            `;

		return view;
	},
	after_render: async (title) => {
		$('#SubBtn').click(function(e) {
			let fullTime;
			if ($('.YesRadio')[0].checked) {
				fullTime = 'Yes';
			} else {
				fullTime = 'No';
			}
			fetch('/acopList', {
				method: 'POST',
				body: JSON.stringify({
					Email: document.querySelector('#picker1').selectedPeople[0].mail,
					Name: document.querySelector('#picker1').selectedPeople[0].displayName,
					Role: title,
					Organization: $('.organizationInput')[0].value,
					Full_Time_Role: fullTime
				}),
				headers: {
					Accept: 'application/json; odata=verbose',
					'Content-Type': 'application/json;odata=verbose'
				},
				cardinentals: 'same-origin'
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
				});
		});
	}
};

export default Form;
