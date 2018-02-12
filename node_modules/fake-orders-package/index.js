var orders = [{
  name:"Pippo",
  product:"Anchovy",
  id: 1,
  status: "ready",
  price: 11.93
},
{
  name:"Caio",
  product:"Crab",
  id: 2,
  status: "ready",
  price: 114.99
},
{
  name:"Sempronio",
  product:"Octopus",
  id: 3,
  status: "ready",
  price: 31.96
},
{
  name:"Caio",
  product:"Escargot",
  id: 4,
  status: "ready",
  price: 70.60
},
{
  name:"Pippo",
  product:"‎Lobster",
  id: 5,
  status: "ready",
  price: 99.99
}]

var filteredStatus = []
var filteredUsers = []

var backup = JSON.parse(JSON.stringify(orders));

exports.all = function(){
  return orders;
}

exports.add = function(newOrder, buyer) {
    var lastOrderId = orders[orders.length - 1].id;
    orders.push({
      name: buyer,
      product: newOrder.product,
      id: lastOrderId+1,
      status: "new",
      price: newOrder.price
    })
}

exports.delete = function(id){
  for (var index in orders) {
    var order = orders[index];
    if (order.id == id) {
      return orders.splice(index, 1);
    }
  }
  return null;
}

exports.update = function(id, newOrder) {
  for (var index in orders) {
    var order = orders[index];
    if (order.id == id) {
      order.status = newOrder.status;
      return order;
    }
  }
  return null;
}

exports.ordersByStatus = function(status) {
  for (var index in orders) {
    var order = orders[index];
    if (order.status == status) {
      filteredStatus.push(order)
    }
  }
  return filteredStatus;
}

exports.receipts = function() {
  var tot = 0;
  for (var index in orders) {
    var order = orders[index];
    if (order.status == "closed") {
      tot = tot + order.price;
    }
  }
  return tot;
}

exports.ordersByUser = function(user) {
  for (var index in orders) {
    var order = orders[index];
    if (order.name == user) {
      filteredUsers.push(order)
    }
  }
  return filteredUsers;
}

exports.getById = function(id){
  for (var index in orders) {
    var order = orders[index];
    if (order.id == id) {
      return order;
    }
  }
  return null;
}
