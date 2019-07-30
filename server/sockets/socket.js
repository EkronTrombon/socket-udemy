const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió MAL!'
        //     });
        // }
    });
    // Enviar a cliente
    client.emit('enviarMensaje', {
        usuario: 'XabierServidor',
        mensaje: 'Hola Servidor'
    });
});