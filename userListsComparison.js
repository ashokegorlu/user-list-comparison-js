"use strict"; // this enables strict mode for the entire script for easy debugging

function uniqueUsersInList1NotInList2(list1, list2) {
  let uniqueUsers = [];
  for (let i = 0; i < list1.length; i++) {
    if (!list2.includes(list1[i])) {
      uniqueUsers.push(list1[i]);
    }
  }
  return uniqueUsers;
}

function uniqueUsersInList2NotInList1(list1, list2) {
  let uniqueUsers = [];
  for (let i = 0; i < list2.length; i++) {
    if (!list1.includes(list2[i])) {
      uniqueUsers.push(list2[i]);
    }
  }
  return uniqueUsers;
}

function findCommonUsers(list1, list2) {
  let commonUsers = [];
  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      commonUsers.push(list1[i]);
    }
  }
  return commonUsers;
}

let list1 = ["RolceRoyce", "Kia", "Maruthi", "Ferrari", "Tesla", "Toyota"];
let list2 = ["Kia", "Honda", "Ferrari", "Toyota", "Bugati", "Ford"];

let uniqueList1 = uniqueUsersInList1NotInList2(list1, list2);
let uniqueList2 = uniqueUsersInList2NotInList1(list1, list2);
let commonUsers = findCommonUsers(list1, list2);

console.log("Unique Users in List1 not in List2:", uniqueList1);
console.log("Unique Users in List2 not in List1:", uniqueList2);
console.log("Common Users in both lists:", commonUsers);
