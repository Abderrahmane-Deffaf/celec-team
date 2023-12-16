function showImage(src, target) {
            var fr = new FileReader();

             fr.onload = function(){
      target.src = fr.result;
    }
           fr.readAsDataURL(src.files[0]);

        }
        function putImage() {
            var src = document.getElementById("select_image");
            var target = document.getElementById("target");
            showImage(src, target);
        }