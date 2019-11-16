const userMaker = {
    name: "",
    age: "",
    married: "",
    purchase: ["", "", ""],

    sayname: () => {
        return this;
    }
};

const user1 = userMaker.sayname();

user1.name = "vincent";
user1.age = 23;
user1.married = true;
user1.purchase = ["phone", "laptop", "car"];


let bool = true;

// while (bool) {
//
//     console.log(user1.age)
//     console.log(user1.name)
//     console.log(user1.married)
//     console.log(user1.purchase)
//
//     bool = false;
//
// }


// for (let i = 0; i < user1.purchase.length; i++) {
//
// }


for (const name of user1.purchase) {
    console.log(name)

}

const text = document.querySelector(".title")
const changeColor = document.querySelector(".changeColor")


changeColor.addEventListener('click',function () {
    text.classList.toggle("change")


})








