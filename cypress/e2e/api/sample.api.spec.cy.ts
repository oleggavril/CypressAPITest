import { isConstructorDeclaration } from "node_modules/typescript/lib/typescript";

describe("Testing API Endpoints Using Cypress", () => {
    
  it("Test GET Request", () => {
      cy.request("https://postman-echo.com/get").then((response) => {
          // cy.log(JSON.stringify(response, null, 4));
        expect(response.status).to.equal( 200);
      });
    });
    
describe("post-Login, get-academic-years, get-rooms, get-sections", () => {
    
  it("Login to the API", () => {
      cy.request({
        method: 'POST',
        url: 'https://staging.wcbshub.com/api/v1/token',
        body: {
          "client_id": "3e4fd4e664b866d7b2df600c487520f4",
          "client_secret": "a77743c94d3ec5f58f123c4a5373821addb1907f446bcbecd23c3268031d90994c08c79013ed68be93c891fd8204f47c3e7571310c832a7c93dfb34e5e4da4b7",
          "grant_type": "client_credentials",
          "password": "",
          "scope": "*",
          "username": ""
        }
      }).then((board) => {
        //console.log(board.status)
        //console.log(board.body)
        console.log(board.allRequestResponses)
      }

      )
    });

//https://filiphric.com/working-with-api-response-data-in-cypress
    it("Test GET Request using POST data", () => {
      cy.request({
        method: 'GET',
        url: 'https://staging.wcbshub.com/api/v1/school/data/rooms',
        headers: {
          'Accept':'application/json;charset=UTF-8',
          'Accept-Encoding':'gzip, deflate, br',
          'Accept-Language':'en-US,en;q=0.9,th;q=0.8,vi;q=0.7,zh-TW;q=0.6,zh;q=0.5,da;q=0.4',
          'Content-Type':'application/json',
          'Connection':'keep-alive',
          'realm':'xdv004y',
          'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzZTRmZDRlNjY0Yjg2NmQ3YjJkZjYwMGM0ODc1MjBmNCIsImp0aSI6ImVkOWE0MzVmZTY4ZDExYjVhNDUxZTRiMTNiNTUwMjMyMjBjNjE5MWVhNGZiZGNiNjRkMWU4NmM1MThlMWRjNzY1MTYyMzJhOTdmZjgyNjFlIiwiaWF0IjoxNjYwODI5Mjc2LjIwNTMyMSwibmJmIjoxNjYwODI5Mjc2LjIwNTMyNCwiZXhwIjoxNjYwODMwMTc2LjE4ODMwNywic3ViIjoiIiwic2NvcGVzIjpbInhkdjAwNHl8KiJdfQ.jzDPCi36LV8cxeVnRRPcpHCXGNz-FeCo0CoYwkrR8REEO-Us7ekin1DhyilP9E5NnOqZdO11k8QNAjuXv_HudhxzjspCX4f9OmMK13gCNpjzT95dv9-UpcJHlzBmczjpKbESdzTYWKNlCyn2wfPuXyemvAZUNembEpUTf2Xk7xqeHyE3HqbWIqAU9-9PVOANb5ulco50BKDgaWYX2R-RmAH-ttrzSeFYXidRf2tbJgxz-rY2-Fd54B8iSulcg-zeJrdA6h3f-DI1xvuHqxts2E6hTU2tfB795TJqQyqQdnNce6rVwDoWR7U_mIru7-p1DCHjQasNdaWwtn3LZEFspw'  
        }
      }        
        
      
      ).then((response) => {
        //debugger;
        expect(response.status).to.equal( 200);        
        console.log(response.status),
        console.log(response.status),
        console.log(response.requestHeaders),
        console.log(response.status)        
      });
    });
});



    
    
  
    // it('Test POST Request', () => {
    //       cy.request({
    //            method: ‘POST’,
    //            url: ‘http://localhost:3000/api/posts’,
    //            body: {
    //                'id' : 2,
    //                'title':'Automation'
    //            }
    //       }).then((response) => {
    //               expect(response.body).has.property('title','Automation');
    //       })
    // })
  
    // it('Test PUT Request', () => {
    //       cy.request({
    //               method: ‘PUT’,
    //               url: ‘http://localhost:3000/api/posts/2’,
    //               body: {
    //                  'id': 2,
    //                  'title' : 'Test Automation'
    //               }
    //       }).then((response) => {
    //               expect(response.body).has.property('title',' Test Automation');
    //       })
    // })
  
    // it('Test DELETE Request', () => {
    //       cy.request({
    //                 method : ‘DELETE’,
    //                 url: ‘http://localhost:3000/api/post/2’
    //                 }).then((response) => {
    //                   expect(response.body).to.be.empty;
    //       })
    // })
  });