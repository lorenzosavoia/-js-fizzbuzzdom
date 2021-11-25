const ul= document.querySelector(".square-container");

for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    li.append(i);
    li.classList.add("square");
    ul.append(li);
    
    if (i % 5 === 0 && i % 3 === 0) {
        li.innerHTML = "fizzbuzz"
        li.classList.add("red")
    }
    else if (i % 3 === 0) {
        li.innerHTML = "fizz"
        li.classList.add("green")
    }
    else if (i % 5 === 0) {
        li.innerHTML = "buzz"
        li.classList.add("yellow")
    }
    
}

