import { addTask, getAllTasks, completeTask } from "./task.js";

console.log(addTask("Study", "high", "2027-01-01"));
console.log(addTask("Gym", "medium", "2026-12-01"));

console.log(getAllTasks());

console.log(completeTask(1));

console.log(getAllTasks());