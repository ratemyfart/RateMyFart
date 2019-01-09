let instasArray = [];
$.ajax({
  url:
    "https://api.instagram.com/v1/users/self/media/recent/?access_token=5715250439.1677ed0.88f17852cdff4d1e8204f9030e5fca37",
  type: "GET",
  crossDomain: true,
  dataType: "jsonp",
  success: function(data) {
    data.data.forEach(element => {
      instasArray.push(element.videos.standard_resolution.url);
    });
    document.querySelector("insta-frame").instas = instasArray;
  }
});
$.ajax({
  url:
    "https://api.instagram.com/v1/users/self/?access_token=5715250439.1677ed0.88f17852cdff4d1e8204f9030e5fca37",
  type: "GET",
  crossDomain: true,
  dataType: "jsonp",
  success: function(data) {
    console.log(data.data.profile_picture);
    $("#profilePic").attr("src", data.data.profile_picture);
  }
});
