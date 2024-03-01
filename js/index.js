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

table.appendChild(thead);

table.appendChild(tbody);

document.getElementById("wrapper").appendChild(table);

//klkj