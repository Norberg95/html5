import Header         from '../components/Header.js'
let Activities = {

    render : async () => {
        
        let view =  /*html*/`
        ${await Header.render('../../assets/img/GettyImages-1180722244.jpg','','')}
        <div class="container">
            <table _ngcontent-c2="" class="table table-hover">
                <thead>
                    <tr>
             
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody _ngcontent-c2="" class="em-c-table__body ">
                ${ActivitiesElements(ActivitiesJSON)}
                </tbody>
                </table>
       </div>

        `
        return view
    }
    , after_render: async () => {
    }
}




let ActivitiesElements=(ActivitiesJSON)=>
{
 let view='';
 ActivitiesJSON.forEach(element => {
    let activity=` <tr _ngcontent-c2="" class="em-c-table__row ">
    <td _ngcontent-c2="" class="em-c-table__cell " colspan="">${element.title}</td>
    <td _ngcontent-c2="" class="em-c-table__cell " colspan="">​${element.description}</td>
</tr>`;
view+=activity;
    
});

return view;
}


export default Activities;




