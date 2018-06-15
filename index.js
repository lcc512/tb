
var person={
  name:'',
  age:0,
  other:''
}

function doIt() {

  // 用自己的key初始化
  Bmob.initialize("a1ab380a6d5d68ab035bba846565d26c", "a24e873ac9ab76aa5002a7361c61ae11");

  // 根据表名，获取表的对象
  var MyMainTable = Bmob.Object.extend("myMainTable");

  var myMainTable = new MyMainTable();
  // 获得这个表的请求对象
  // var query = new Bmob.Query(myMainTable);

  // 添加数据
  // myMainTable.set('name','张三');



  myMainTable.save(person, {
    success: function(object) {
      // alert("create object success, object id:"+object.id);
      alert("提交成功");
    },
    error: function(model, error) {
      console.log(error)
      alert("没成功，，，");
      window.close()
    }
  });
}

function getFormdata() {
  person.name= $('#name').val()
  person.age=parseInt($('#age').val())
  person.other=$('#other').val()

}


;$(function () {

  var form1 = document.getElementById('formTest');

  form1.onsubmit = function () {

    getFormdata()
    doIt()
    console.log(person)
  }
})



