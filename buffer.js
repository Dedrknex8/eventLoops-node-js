
//ALLOCATE BUFFER
const bufferAllocate = Buffer.alloc(10); //allocate of buffer of 10 size
console.log(bufferAllocate);

//CREATE BUFFER FROM STRING 
const bufferFromString = Buffer.from("hello string");
console.log(bufferFromString);

//Buffer from array of integer

const bufferFromArrayOfinteger = Buffer.from([1,2,3,4]);
console.log(bufferFromArrayOfinteger);

//WRITE TO A BUFFER
bufferAllocate.write("helloagain");
console.log(bufferAllocate,'\n','this is changed buffer string',bufferAllocate.toString()); //THIS WILL CHANGE THE BUIFFER

//READ FROM A BUFFER
console.log(bufferFromString[0]); //THIS WILL READ FIRST BYTE FROM A BUFFER
//CONACTE A BUFFER
const concateBuffer = Buffer.concat([bufferAllocate,bufferAllocate]);
console.log(concateBuffer);

