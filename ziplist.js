function zipList(list1,list2){
  var list3 = [];
  for(var i=0; i<list1.length; i++){
    let j=i*2;
    list3[j]=list1[i];
    list3[j+1]=list2[i];
  }
  return list3;
}

function zipListTheSimpleWay(list1,list2){
  var list3 = [];
  _.each(_.zip(list1,list2),function(value){list3.push(value[0]);list3.push(value[1]);});
  return list3;
}
