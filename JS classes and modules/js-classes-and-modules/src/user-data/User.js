import { Task } from "./Task";

export class User {
    firstName = "";
    lastName = "";
    age = 1;
    tasks = [];

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setAge(age) {
        if (age > 0 && typeof age === "number" && Number.isFinite(age)) {
            this.age = age;
        }
    }

    addTasks(tasks) {
        this.tasks = [
            ...this.tasks,
            ...tasks.filter((task) => task instanceof Task),
        ];
    }

    getTasksCount() {
        return this.tasks.length;
    }
}
