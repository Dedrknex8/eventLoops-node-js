const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');
const { Transform } = require("stream"); // Transform module that allows you manipulate and transform data

class EncryptStream extends Transform {
    constructor(key,vector){
        super();
        this.key = key;
        this.vector = vector;
    }

    _transform(chunk, encoding, callback){
        const cipher = crypto.createCipheriv("aes-256-cbc",this.key,this.vector);
        const encrypted = Buffer.concat([cipher.update(chunk),cipher.final()]); //encrypt
        this.push(encrypted);
        callback();
    
    }
}
    const key = crypto.randomBytes(32);
    const vector = crypto.randomBytes(16);
    const readableStream = fs.createReadStream('input.txt');

    //new zip object
    const gzipStream = zlib.createGzip();

    const encrypttream = new EncryptStream(key,vector);

    const writeableStream  = fs.createWriteStream("output.txt");

    readableStream.pipe(gzipStream).pipe(encrypttream).pipe(writeableStream);
