function navbar(){
    
    let data = JSON.parse(localStorage.getItem('Student_Data')) || [];
    let obj={};
    // let arr=[];

    for(let i=0; i < data.length; i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch] = 0;
        }
    }
for(let i=0; i< data.length; i++){
    obj[data[i].batch]++;
    
}
// arr.push(obj)
for( let key in obj){

    let div=document.createElement('div');
    let b=document.createElement('h3');  
    b.innerText=key+" - "+obj[key];
    div.append(b)
    document.getElementById('navbar').append(div)
      console.log(key+"=>"+obj[key])
}

let container=document.getElementById('container');
data.forEach( (el,index)=>{
    let i=document.createElement('img');
    i.src=el.image;
    let n=document.createElement('p');
    n.innerText=el.name;
    let b=document.createElement('p');
    b.innerText=el.batch;
    let c=document.createElement('p');
    c.innerText=el.course;
    let u=document.createElement('p');
    u.innerText="Unit"+"-"+el.unit;
    let btn=document.createElement('button');
    btn.innerText="Remove";
    btn.addEventListener('click', function(){
        remove(index);
    })
    btn.style.cursor='pointer';
    btn.setAttribute('id',"remove")
    let div = document.createElement('div');
    div.append(i,n,b,c,u,btn)
    container.append(div)
})


}


navbar()
function remove(index){
    let data = JSON.parse(localStorage.getItem('Student_Data')) || [];

    let newdata=data.filter((el,i)=>{
        
        if(i===index){
            let trash=JSON.parse(localStorage.getItem('trash'))|| [];
            trash.push(el);
            localStorage.setItem('trash',JSON.stringify(trash));
        }
        return i !== index;
    })
localStorage.setItem('Student_Data',JSON.stringify(newdata))
window.location.reload();

}