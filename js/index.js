//BAI TAP VE GIT

//Tao 2 branch : Master, devs

//Tu branch devs bat dau code

//Tu branch master merge code tu branch devs

//push code len repo tren github



//BAI TAP FETCH

//Lay du lieu o https://raw.githubusercontent.com/CaoYuanNguyen/Bai-2-Array-Json/master/mydata.json

//Sort theo tuoi nho dan 10 > 7 > 1

//Tao ra 1 cai table gom Ten|Giong Loai|Tuoi. table nay se tu dong in ra theo data.lenght

//css table

//Tao ra 1 card chua ten, giong loai, tuoi

//Bai tap FETCH
var animal = [
    {
      "name": "Tom",
      "piece": "cat",
      "age": "4"
    },
    {
      "name": "Bull",
      "piece": "dog",
      "age": "6"
    },
    {
      "name": "Khe",
      "piece": "cat",
      "age": "2"
    },
    {
      "name": "Bua",
      "piece": "dog",
      "age": "1"
    },
    {
      "name": "Mally",
      "piece": "elephant",
      "age": "12"
    },
    {
      "name": "BigCat",
      "piece": "tiger",
      "age": "5"
    },
    {
      "name": "Han",
      "piece": "bird",
      "age": "2"
    }
  ]
  headers = ["Name", "Piece", "Age"];
//Sort theo tuoi nho dan 10 > 7 > 1
animal.sort(function (a, b) {
    return b.age - a.age;
});
// document.getElementById("wrapper").innerHTML = animal[0].age;

//Tao ra 1 cai table gom Ten|Giong Loai|Tuoi. table nay se tu dong in ra theo data.lenght
var thead = document.createElement("thead");
var tr = document.createElement("tr");
thead.appendChild(tr);
headers.forEach(function(value){
    var th = document.createElement("th");
    th.textContent = value;
    tr.appendChild(th);
})


var tbody = document.createElement("tbody");
animal.forEach(function(value){
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  td1.textContent = value.name;
  td2.textContent = value.piece;
  td3.textContent = value.age;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tbody.appendChild(tr);
})
/*
<table>
   <thead>
     <tr>
       <th>
         Tên
       </th>
       <th>
         Loài
       </th>
       <th>
        Tuổi
       </th>
    </tr>
  </thead>
   <tbody>
    <tr>
      <td>Tom</td>
      <td>Cat</td>
      <td>2</td>
     </tr>
    <tr>
      <td>Bully</td>
      <td>Dog</td>
      <td>3</td>
    </tr>
     <tr>
       <td>Jan</td>
      <td>Bỉrd</td>
    <td>1</td>
    </tr>
  </tbody>
</table> 
*/

var table = document.createElement("table");

const myStyle = document.createAttribute('class');
myStyle.value = "my-table";
table.setAttributeNode(myStyle)

table.appendChild(thead);

table.appendChild(tbody);

document.getElementById("wrapper").appendChild(table);



/*
<div class="wrapper-div">
  <div class="div-1">
    <div class="div-1-name">
    
    </div>
  </div>
  <div class="div-2">
    <div class="div-2-image"></div>
  </div>
  <div class="div-3">
    <div class="div-3-1">
      <div class="div-3-1-age"></div>
    </div>
    <div class="div-3-2">
      <div class="div-3-2-piece"></div>
    </div>
  </div>
</div>
*/

//Tao ra 1 card chua ten, giong loai, tuoi

animal.forEach((value)=>{
  let wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("class","wrapper-div")
  let div1 = document.createElement("div");
  div1.setAttribute("class","div-1");
  let div1Name = document.createElement("div");
  div1Name.setAttribute("class", "div-1-name");
  div1Name.textContent = value.name;
  div1.appendChild(div1Name);
  wrapperDiv.appendChild(div1);
  let div2 = document.createElement("div");
  div2.setAttribute("class", "div-2");
  let div2Image = document.createElement("div");
  div2Image.setAttribute("class", "div-2-image");
  div2.appendChild(div2Image);
  let div3 = document.createElement("div");
  div3.setAttribute("class", "div-3");
  let div31 = document.createElement("div");
  div31.setAttribute("class", "div-3-1");
  let div31Age = document.createElement("div"); 
  div31Age.textContent = value.age;
  div31.appendChild(div31Age);
  let div32 = document.createElement("div");
  div32.setAttribute("class", "div-3-2");
  let div32Piece = document.createElement("div"); 
  div32Piece.textContent = value.piece;
  div32.appendChild(div32Piece);
  div3.appendChild(div31);
  div3.appendChild(div32);
  wrapperDiv.appendChild(div2);
  wrapperDiv.appendChild(div3);
  document.getElementById("content").appendChild(wrapperDiv);
})


