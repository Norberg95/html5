let ACoPList = {
	render: async () => {
		let view = /*html*/ `
        <div style="margin-top:20px;">
        <table class="table table-striped table-bordered" id="table1">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Team/Organization</th>
                    <th scope="col">Full Time Role (Yes or No)</th>

                    

                </tr>
            </thead>
            <tbody id=tableBody>

            </tbody>
        </table>
    </div>
        `;
		return view;
	},
	after_render: async () => {
        let table;
        fetch("/acopList", {
            headers: { "Accept": "application/json; odata=verbose" },
            cardinentals: 'same-origin'
        }).then((response) => response.json())
            .then((data) => {
                let items = data;
                console.log(items)
                let rowNum = 1;
                 items.forEach((item) => {
                    $("#tableBody")[0].innerHTML += '<tr id=' + item._id + '><th scope="row">' + rowNum + '</th><td>' + item.Name + '</td><td>' + item.Email + '</td><td>' + item.Role + '</td><td>' + item.Organization + '</td><td>' + item.Full_Time_Role + '</td></tr>'
                    rowNum++;
                    console.log(item);
                }); 
                table = new BSTable("table1", {
                    onBeforeDelete: function () {
                        fetch(`/acopList/${arguments[0][0].id}`, {
                            method: "DELETE",
                            headers: { "Accept": "application/json; odata=verbose", "Content-Type": "application/json;odata=verbose"},
                            cardinentals: 'same-origin'
                        }).then((response) => response.json())
                            .then((data) => {
                                console.log(data)
                            });


                        


                    },
                    onEdit: function () {
                        fetch(`/acopList/${arguments[0][0].id}`, {
                            method: "PUT",
                            body: JSON.stringify({
                              
                                "Email": arguments[0][0].children[2].innerHTML,
                                "Name": arguments[0][0].children[1].innerHTML,
                                "Role": arguments[0][0].children[3].innerHTML,
                                "Organization": arguments[0][0].children[4].innerHTML,
                                "Full_Time_Role":arguments[0][0].children[5].innerHTML




                            }),
                            headers: { "Accept": "application/json; odata=verbose", "Content-Type": "application/json;odata=verbose"},
                            cardinentals: 'same-origin'
                        }).then((response) => response.json())
                            .then((data) => {
                                console.log(data)
                            });


                        
                    }

                });
                table.init();
            });
    }
};

export default ACoPList;