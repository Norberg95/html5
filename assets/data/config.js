
let generateFAQ=(FAQ_JSON, number)=>
{
    for (let index = 0; index < number; index++) {
      FAQ_JSON.push(
        {
            "question": faker.lorem.sentence(),
            "answer": faker.lorem.sentences()
        }
      )  
    }
}


let generateActivities=(ActivitiesJSON, number)=>
{
    for (let index = 0; index < number; index++) {
        ActivitiesJSON.push(
        {
            "title": faker.company.catchPhrase(),
            "description": faker.lorem.sentences()
        }
      )  
    }
}

let generateEvents=(eventsJSON, number)=>
{
    for (let index = 0; index < number; index++) {
        eventsJSON.push(
        {
            "startTime": faker.date.future(),
            "id": faker.random.uuid(),
            "name": faker.lorem.sentence(),
            "details": faker.lorem.paragraph()
        }
      )  
    }
}



let FAQ_JSON=[]
let ActivitiesJSON=[]
let eventsJSON={"items":[]}
generateFAQ(FAQ_JSON,10)
generateActivities(ActivitiesJSON, 20)
generateEvents(eventsJSON.items,42)


