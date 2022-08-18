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
      })
      .as('accessToken')
      console.log(cy.get('@accessToken'))
    });
    
    //NEED HELP PLEASE. To add here 2nd test for GET like fromthis one but with using alias
    // it("Test GET Request using POST data", () => {
    //   cy.request({
    //     method: 'GET',
    //     url: 'https://staging.wcbshub.com/api/v1/school/data/rooms',
    //     headers: {
    //       'Accept':'application/json;charset=UTF-8',
    //       'Accept-Encoding':'gzip, deflate, br',
    //       'Accept-Language':'en-US,en;q=0.9,th;q=0.8,vi;q=0.7,zh-TW;q=0.6,zh;q=0.5,da;q=0.4',
    //       'Content-Type':'application/json',
    //       'Connection':'keep-alive',
    //       'realm':'xdv004y',
    //       'Authorization':'Bearer ' + cy.get('@accessToken') 
    //     }
    //   }        
        
      
    //   ).then((response) => {
    //     //debugger;
    //     expect(response.status).to.equal( 200);        
    //     console.log(response.status),
    //     console.log(response.status),
    //     console.log(response.requestHeaders),
    //     console.log(response.status)        
    //   });
    // });
    
    
});

