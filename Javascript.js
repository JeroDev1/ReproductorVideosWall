// el array de los videos para la primera parte
let vids = ["/videos/2.mp4","/videos/3.mp4","/videos/4.mp4","/videos/1.mp4",]
// la longitud del array de los videos
let leng = vids.length;
// un numero utilizado para saber que video se está reproduciendo
let n = 0;
// utilizo el evento "ended" para saber si el video se ha acabado
vid.addEventListener("ended",()=>{
// si el video se ha acabado cambia el atributo src
vid.setAttribute("src", vids[n%leng]);

n++;
}
)
// el array de los videos para la segunda parte
let vids2 = ["/videos/3.mp4","/videos/4.mp4","/videos/1.mp4","/videos/2.mp4",]
// la longitud del array de los videos
let leng2 = vids2.length;
// un numero utilizado para saber que video se está reproduciendo
let n2 = 0;
// utilizo el evento "ended" para saber si el video se ha acabado
vid2.addEventListener("ended",()=>{
    // si el video se ha acabado cambia el atributo src
vid2.setAttribute("src", vids2[n2%leng2]);
    
n2++;
}
)
// el array de los videos para la tercera parte
let vids3 = ["/videos/4.mp4","/videos/1.mp4","/videos/2.mp4","/videos/3.mp4",]
// la longitud del array de los videos
let leng3 = vids3.length;
// un numero utilizado para saber que video se está reproduciendo
let n3 = 0;
// utilizo el evento "ended" para saber si el video se ha acabado
vid3.addEventListener("ended",()=>{
    // si el video se ha acabado cambia el atributo src
vid3.setAttribute("src", vids3[n3%leng3]);
    
n3++;
}
)
// el array de los videos para la tercera parte
let vids4 = ["/videos/1.mp4","/videos/2.mp4","/videos/3.mp4","/videos/4.mp4",]
// la longitud del array de los videos
let leng4 = vids4.length;
// un numero utilizado para saber que video se está reproduciendo
let n4 = 0;
// utilizo el evento "ended" para saber si el video se ha acabado
vid4.addEventListener("ended",()=>{
    // si el video se ha acabado cambia el atributo src
vid4.setAttribute("src", vids4[n4%leng4]);
    
n4++;
}
)