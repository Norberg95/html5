import EventsPreview         from '../components/EventsPreview.js'
import Header         from '../components/Header.js'

let Events = {

    render : async () => {
        
        return /*html*/`
        ${await Header.render('assets/img/GettyImages-1129489551.jpg','Upcoming Events','You can join the events orgaized by ACoP Budapest')}
        ${await EventsPreview.render(await eventsJSON)}
           
        `
    }
    , after_render: async () => {
        await EventsPreview.after_render(await eventsJSON)
    }
}

export default Events;