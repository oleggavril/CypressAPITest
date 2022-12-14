describe("Login and check 3 get endpoints", () => {
    
    it("Login to the API", () => {
        cy.request({
          method: 'POST',
          url: 'https://staging.wcbshub.com/api/v1/token',
          body: {
            "client_id": "3e4fd4e664b866d7b2df600c487520f4",
            "client_secret": "",
            "grant_type": "client_credentials",
            "password": "",
            "scope": "*",
            "username": ""
          }
        })
        .its('body.access_token')
        .then((data) => {
             console.log(data)
        //   console.log(data.status)
        //   console.log(data.body)
        //   console.log(data.allRequestResponses)
        cy.request({
            method: 'GET',
            url: 'https://staging.wcbshub.com/api/v1/school/data/rooms',
            headers: {
              'Accept':'application/json;charset=UTF-8',
              'Content-Type':'application/json',
              'Connection':'keep-alive',
              'realm':'xdv004y',
              'Authorization':'Bearer ' + data  
            }
          }   
            
          
          ).then((response) => {
            //debugger;
            expect(response.status).to.equal( 200);        
                        
            let json = JSON.stringify(response)
            expect(json).to.include("Arabella Room");
          });



          })
      });
});

