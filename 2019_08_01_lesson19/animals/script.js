const frame = document.getElementById('image-frame');
document.body.addEventListener( 'click', (event) => {
    const target = event.target;
    if (target.tagName =='BUTTON'){
    let url ='';
    if (target === document.getElementById('dog')){
        url = 'https://random.dog/woof.json';
    }
    else if(target === document.getElementById('cat')){
        url = 'https://aws.random.cat/meow';
    } 
    else if( target === document.getElementById('fox')){
        url = 'request.php';
    }
    fetch(url,{
        method:'GET',
        mode:'cors'
    }).then(function(response) {
        return response.json();
      })
      .then((obj) => {
        //   const obj = JSON.stringify(data);
        console.log(obj);
          for (let item in obj){
                if ( obj[item].match(/\.(mp4|mov|avi|mpeg)$/i)){
                    frame.innerHTML =`<video src="${obj[item]}" controls autoplay></video>`;
                }
                else if( obj[item].match(/\.(png|jpg|jpeg|gif|webp)$/i)){
                    frame.innerHTML =`<img src="${obj[item]}"></img>`;
                }
                else{
                    frame.innerHTML ='<div>Invalid format</div>';
                }
                return;
          }
      });
}
});