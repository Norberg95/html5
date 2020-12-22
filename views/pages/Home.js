// --------------------------------
//  Define Data Sources
// --------------------------------
import Header         from '../components/Header.js'
import Tiles         from '../components/Tiles.js'
import ShowCases         from '../components/ShowCases.js'
import EventsPreview         from '../components/EventsPreview.js'
import FAQ         from '../components/FAQ.js'



let Home = {
    render : async () => {
        
        let view =  /*html*/`
        ${await Header.render('./assets/img/main.jpeg','Budapest Agile Community of Practices','Welcome! Here you can find people who share passion for Agile and DevOps collaboration')}
        ${await Tiles.render()}
        ${await ShowCases.render()}
        ${await EventsPreview.render()}
        ${await FAQ.render(FAQ_JSON)};
        `

        
        return view
    }
    , after_render: async () => {
        await Tiles.after_render();
        await FAQ.after_render();
        await EventsPreview.after_render(await eventsJSON, 3);
        
    }

}

export default Home;