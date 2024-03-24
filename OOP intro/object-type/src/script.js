//1.
function createUser(firstName, lastName) {
    const user = {
        firstName: firstName,
        lastName: lastName,
    };
    return user;
}

//2.
// function getFullName() {
//     if (
//         getFullName.arguments.length == 1
//         // ||
//         // typeof user !== undefined ||
//         // user.length !== 0
//     ) {
//         // console.log(arguments[0]);
//         let firstNameExist = Object.keys(this.user).some(
//             (key) => key === "firstName"
//         );
//         let lastNameExist = Object.keys(this.user).some(
//             (key) => key === "lastName"
//         );
//         if (firstNameExist == true && lastNameExist == true) {
//             let firstName = this.user["firstName"];
//             let lastName = this.user["lastName"];
//             return firstName + " " + lastName;
//         }
//     } else {
//         return " ";
//     }
// }

//Gabi version
function getFullName(user) {
    if (!user) {
        return "";
    }
    return `${user.firstName} ${user.lastName}`;
}

//3.
function getWidth(params) {
    if (params && Object.keys(params).length !== 0) {
        if (
            (stylingExists =
                Object.keys(params).some((key) => key === "styling") == true)
        );
        {
            if (
                (sizesExists =
                    Object.keys(params["styling"]).some(
                        (key) => key === "sizes"
                    ) == true)
            );
            {
                if (
                    params["styling"]["sizes"] &&
                    (widthExists =
                        Object.keys(params["styling"]["sizes"]).some(
                            (key) => key === "width"
                        ) == true)
                ) {
                    return params["styling"]["sizes"]["width"];
                } else {
                    return null;
                }
            }
        }
    } else {
        return null;
    }
}

//4.
function extendObject(obj, isValid) {
    let clone = Object.assign({}, obj);
    clone.isValid = isValid;
    return clone;
}

//5.
function sumPrices(prices) {
    let values = Object.values(prices);

    //FIRST method: Using filter() and forEach()
    // Check if we have at least one number type
    // let numberTypes = values.filter(
    //     (el) =>
    //         typeof el === "number" &&
    //         isNaN(el) === false &&
    //         isFinite(el) === true
    // );

    // if (numberTypes.length > 0) {
    //     let sum = 0;
    //     numberTypes.forEach((num) => (sum += num));
    //     return sum;
    // } else {
    //     return 0;
    // }

    //SECOND method: Using reduce()
    let numberValues = values.reduce(function (acc, currentValue) {
        if (
            typeof currentValue === "number" &&
            isNaN(currentValue) === false &&
            isFinite(currentValue) === true
        ) {
            return acc + currentValue;
        } else {
            return acc + 0;
        }
    }, 0);

    return numberValues;
}

//6.
function createUserWithFullName(firstName, lastName) {
    // let user = createUser(firstName, lastName);

    // this.firstName = function setFirstName(newFirstName) {
    //     this.firstName = newFirstName;

    // };
    // this.lastName = function setLastName(newLastName) {
    //     this.lastName = newLastName;
    // };
    // this.getFullName = function () {
    //     this.firstName + " " + this.lastName;
    // };
    // return user;

    //Gabi version
    this.firstName = firstName;
    this.lastName = lastName;

    return {
        ...createUser(this.firstName, this.lastName),
        setFirstName(newFirstName) {
            this.firstName = newFirstName;
        },
        setLastName(newLastName) {
            this.lastName = newLastName;
        },
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    };
}
