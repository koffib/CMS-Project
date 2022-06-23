
const title = document.getElementById("title");
const btnDisplay = document.getElementById("btnAddPost");
const disContent = document.getElementById("content");
const textColor = document.getElementById("font-color");
const backgroundColor = document.getElementById("background-color");





btnAddPost.addEventListener('click',function() {
    
    //Create div
    let blogNode = document.createElement("div");
    blogNode.classList.add("blog-article");
    blogNode.style.color = textColor.value;
    blogNode.style.backgroundColor = backgroundColor.value;


    //title
    let titleNode = document.createElement("h2");
    let titleText = document.createTextNode(title.value);
    titleNode.appendChild(titleText);

     
    //Date
    let dateNode = document.createElement("p");
    let dateText = document.createTextNode(new Date());
    dateNode.appendChild(dateText);

    //content

    let contentNode = document.createElement("p");
    let contentText =  document.createTextNode(content.value);
    contentNode.appendChild(contentText);
      


    //adding blog div

    // Adding to blog div
    blogNode.appendChild(titleNode);
    blogNode.appendChild(dateNode);
    blogNode.appendChild(contentNode);

    //appendchild
    disContent.appendChild(blogNode);
})












