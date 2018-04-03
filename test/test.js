let chai = require('chai')
let chaiHttp = require('chai-http')
const expect = require('chai').expect
const {readFileSync} = require("fs");

chai.use(chaiHttp)
const url= 'http://localhost:3000'

describe('Insertar un item: ',()=>{
  it('debería insertar un item', (done) => {
    chai.request(url)
      .post('/item')
      .attach("image", readFileSync("./test/test.png"), "test.png")
      .field("name", "Creado desde test")
      .field("price", 10)
      .end( function(err,res){
        console.log(res.body)
        expect(res.body).to.have.property('message').to.be.equal('Item agregado.');
        expect(res).to.have.status(200);
        done();
      });
  });
});


describe('Obtener todos los items: ',()=>{
  it('debería obtener todos los items', (done) => {
    chai.request(url)
      .get('/item')
      .end( function(err,res){
        //console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Obtener un item específico: ',()=>{
  it('debería obtener un item específico', (done) => {
    chai.request(url)
      .get('/item/5ac3493d074d4f463558bfdf')
      .end( function(err,res){
        //console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
  it('debería mostrar un error al intentar obtener un item inexistente', (done) => {
    chai.request(url)
      .get('/item/5abf0ae123c4615dbaf584e9')
      .end( function(err,res){
        //console.log(res.body)
        expect(res.body).to.have.property('message').to.be.equal('No se pudo cargar el documento.')
        expect(res).to.have.status(500);
        done();
      });
  });
});

describe('Modificar item con id 5ac3493d074d4f463558bfdf: ',()=>{
  it('debería modificar el nombre del item con id dado', (done) => {
    chai.request(url)
      .put('/item/5ac3493d074d4f463558bfdf')
      .send({name:'Cambiado desde test'})
      .end( function(err,res){
        //console.log(res.body)
        expect(res.body).to.have.property('message').to.be.equal('Actualizacion completa.');
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Eliminar item con id 5ac3493d074d4f463558bfdf: ', () => {
  it('debería eliminar el item con id dado', (done) => {
    chai.request(url)
      .delete('/item/5ac3493d074d4f463558bfdf')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('message').to.be.equal('Item eliminado.');
        done();
      });
  });
});
