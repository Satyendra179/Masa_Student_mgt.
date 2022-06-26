




function add_data(e){
    e.preventDefault();
    let image=document.getElementById('image').value;
    let name=document.getElementById('name').value;
    let batch=document.getElementById('batch').value;
    let course=document.getElementById('course').value;
    let unit=document.getElementById('unit').value;
    if(image==="" || name==="" ||batch==="" ||course===""||unit===""){
        alert('Enter the data');
    }else{
        let s= new student_Data(image,name,batch,course,unit);
        console.log(s)
        let data=JSON.parse(localStorage.getItem('Student_Data')) || [];
        data.push(s);
        localStorage.setItem('Student_Data',JSON.stringify(data));
        // document.getElementById('student_f').innerHTML=null;
        
    }
    
    
}
function  student_Data(i,n,b,c,u){
    this.name=n;
    this.image=i;
    this.batch=`FT-Web_${b}`;
    this.course=c;
    this.unit=u;
}

function navbar(){
    
        let data = JSON.parse(localStorage.getItem('Student_Data')) || [];
        let obj={};
        // let arr=[];
    
        for(let i=0; i < data.length; i++){
            if(!obj[data[i].batch]){
                obj[data[i].batch] = 0;
                // obj[data[i].batch] = [];

            }
        }
        
    for(let i=0; i< data.length; i++){
       
        obj[data[i].batch]++;
        // if(data[i]==obj[data[i]])
        // obj[data[i].batch].push(data[i])
       
        }
        
        

    
    // arr.push(arr)
    console.log(obj)
    for( let key in obj){
    
        let div=document.createElement('div');
        let b=document.createElement('h3');  
        b.innerText=key+" - "+obj[key];
        div.append(b)
        document.getElementById('navbar').append(div)
        
          console.log(key+"=>"+obj[key])
    }
}
    

navbar()