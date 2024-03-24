export class Task {
    #description = "";

    name = "";

    constructor(name) {
        this.name = name;
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        if (typeof description === "string") {
            this.#description = description;
        }
    }
}
