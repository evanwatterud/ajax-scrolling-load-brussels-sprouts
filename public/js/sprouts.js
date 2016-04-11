// YOUR CODE GOES HERE
$(window).on("scroll", function() {
  if($(window).scrollTop() + window.innerHeight == $(document).height()) {
    var params = $("a.more-sprouts").attr('href').split('?')[1];
    var nextPage = (parseInt($("a.more-sprouts").attr('href').split('=')[1]) + 1).toString();

    var request = $.ajax({
      method: "GET",
      url: "/tweets.json?" + params
    });

    request.done(function(tweetPage) {
      tweetPage.forEach(function(tweet) {
        var html = `
          <li class="tweet">
            <div class="body">` + tweet['text'] + `</div>
            <div class="user">` + tweet['username'] + `</div>
          </li>
        `;

        $(".tweets").append(html);
        $("a.more-sprouts").attr('href', '/tweets?page=' + nextPage);
      });
    });
  }
});
