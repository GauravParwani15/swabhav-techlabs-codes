

    var showPhoto=true;

    function toggle(){
        
        if(document.getElementById('myImage')) {
            document.getElementById('myImage').remove();
            return;
    }

        const image = document.createElement("img");
        image.src="image.jpeg"; image.height=500; image.width=1000;
        image.id="myImage";
        const element = document.getElementById("container");
        element.appendChild(image);
    }
l̥