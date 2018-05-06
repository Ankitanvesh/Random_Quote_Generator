
$("#new-quote").on('click',function(e){   $.ajaxSetup({cache:false});
                                      $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data){
                                        $("#text").html(data[0].title+"   sakjbaabkhd");
                                        $("#author").html(data[0].content);
                                      });
  
});
