//llamamos el modulo http
const http = requiere('http');
//establecemos la url o ip de nuestro serbidor
const hostname ='192.168.1.109';
//establecemos el puerto de escucha
const port =3000;
//creamos una instancia http con un reques y un response
const server = http.createServer((req, res) =>{
//el servidor respondera un codigo 200
res.statusCode=200;
//el servidor respondera con un texto plani
res.setHeader('Content-Type', 'text/plain');
//elservidor respondera el mensaje hola mundo
res.end('hola mundo \n');
});
server.listen(port, hostname, ()=>{
console.log(`el servidor se esta ejecutando en http://$(hostname):$(port)/`)

})