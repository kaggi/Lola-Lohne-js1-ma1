const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1

const cat = {
    complain() {
        console.log("Meow!");
    }
};

cat.complain();

//Question 2


let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//Question 3


heading.style.fontSize = "2em";

//Question 4


heading.classList.add("subheading");

//Question 5


let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(paragraph){
    paragraph.style.color = "red";
});

//Question 6


let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7


function logName(list) {
    list.forEach(function(item) {

        if(!item.name) {
            item.name = "Name unknown";
        }
        console.log(item.name);

    });
}

logName(cats);

//Question 8


function createCats(cats) {

    let html = "";

    cats.forEach(function(cat){
        if (!cat.age) {
            cat.age = "Age unknown";
        }

        html = html + "<div><h5>" + cat.name + "</h5><p>" + cat.age + "</p></div>";
        
    });

    return html;
}

let catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);