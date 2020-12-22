let EventsPreview = {
	render: async () => {
		let view = /*html*/ `
        <div id="events"></div> `;
		return view;
	},
	after_render: async (events, displayCount) => {

        let view = /*html*/ `
        <div class="blog-home2 py-5">
        <div class="container">
            <!-- Row  -->
            ${displayCount?`<div class="row justify-content-center">
            <!-- Column -->
            <div class="col-md-8 text-center" id="events">
                <h3 class="my-3">Upcoming Events</h3>
                <h6 class="subtitle font-weight-normal">You can join the events orgaized by ACoP Budapest</h6>
            </div>
            <!-- Column -->
            <!-- Column -->
        </div>`:''}
            
            ${createEventUI(events, displayCount)}
            ${displayCount?`<div class="mx-auto">
            <a href="/#/events" class="nav-link">
                <button class="btn btn-outline-primary">See All Upcoming Events</button>
            </a>
        </div>`:''}
            


        </div>
    </div>


        `;

        document.querySelector("#events").innerHTML=view;
    }
};

let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
let baseEventxURL = 'https://example.com/events';

function createEventUI(events, displayCount) {
	let eventsHTML = '';

	
	let i = 0;
    let eventRowID = -1;
    let eventMaxIndex=displayCount?displayCount-1:events.items.length;
	while (i <= eventMaxIndex) {
		eventRowID++;
		let evenetrowHTML = `<div class="row mt-4" id="eventRow${eventRowID}">${getNextThreeEvents([
			events.items[i],
			events.items[i + 1],
			events.items[i + 2]
		])}</div>`;
		eventsHTML += evenetrowHTML;
		i = i + 3;
    }
    return eventsHTML;
}

function getNextThreeEvents(events) {
	let eventRow = '';
	events.forEach((element, index) => {
		if (element) {
			let eventDate = new Date(Date.parse(element.startTime));
            //TODO
			eventRow += `<!-- Column -->
                        <div class="col-md-4 on-hover">
                        <div class="card bg-light border-light mb-4">

                        <div class="d-flex justify-content-between card-header">
                            <h5 class="font-weight-medium mt-3 d-inline-block"><a href="${baseEventxURL +
                                element.id}" class="text-decoration-none link">${element.name}</a></h5>
                            <div  class="d-flex flex-column justify-content-center">

                                <div class="bg-info-gradiant p-2 text-center rounded text-white style="width: 49px!important; height: 68px!important;">
                                    <div>${months[eventDate.getMonth()]}</div>
                                    <div>${eventDate.getDate()}</div>
                                </div>
                            </div>
                            
                            
                        </div>
                        
        
                        <p class="mt-3">${shortenDetails(element.details)}</p>
                        <div class="card-footer">
                        <small class="text-muted">  <a href="${baseEventxURL +
							element.id}" class="text-decoration-none linking text-themecolor mt-2">More Details</a></small>
                        </div>
                      
                        </div>
                        </div>`;
		}
	});
    return eventRow;
    

}

function shortenDetails(details){
    if(details.length>130){
        details= details.substring(0,130)+'...';
    }
    return details
}

export default EventsPreview;
