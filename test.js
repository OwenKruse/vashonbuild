var cloudinary = require('cloudinary');
//https://res.cloudinary.com/dtu1eezmp/image/upload/v1676092290/Projects/BurtonLoop/JDG5708_jhhwjx.jpg
cloudinary.config({
    cloud_name: "dtu1eezmp", // add your cloud_name
    api_key: "419732176412335", // add your api_key
    api_secret: "t-KwCx_pn7ZU_iXv2kXWQfqIBig", // add your api_secret
    secure: true
});
let results;
cloudinary.v2.search.expression(
    'folder:Projects/McCulley*' // add your folder
).sort_by('public_id','desc').max_results(100).execute().then(result=>{
    results = result.resources;
    console.log(results);
    // Write the names of the images to a file

    var fs = require('fs');
    var stream = fs.createWriteStream("McCulley.txt");
    stream.once('open', function(fd) {
        for (var i = 0; i < results.length; i++) {
            stream.write(results[i].filename + "\n");
        }
        stream.end();
    });
});

