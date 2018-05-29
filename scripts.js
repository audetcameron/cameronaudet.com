const wpApiUrl = 'http://cameronaudet.com/blog/wp-json/wp/v2/posts/?_embed&per_page=6'
/**
 * DisplayPosts class.
 * @author Original Allen Moore
 * edited by Cameron Audet
 * @extends Vue
 */
 class DisplayPosts extends Vue {

  constructor() {
    const props = {
      el: '#app',
      data: {
        posts: null
      },
      created() {
        this.fetchPosts();
      },
      methods: {
        fetchPosts() {
          const xhr = new XMLHttpRequest(),
          self = this;

          this.getData( xhr );
        },
        hasThumbnail: function (post) {
          if (post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes){
            return  post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large;
          }
        },
        getThumbnail: function (post) {
          if (post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url){
            return post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;
          }
        },
        authorName: function(post){
          if (post._embedded.author[0].name){
            return  post._embedded.author[0].name;
          }
        },
        categoryName: function(post){
          if (post._embedded['wp:term'][0][0].name){
            return  post._embedded['wp:term'][0][0].name;
          }
        },
        categoryLink: function(post){
          if (post._embedded['wp:term'][0][0].link){
            return  post._embedded['wp:term'][0][0].link;
          }
        }
      }//methods    
    };
    
    super( props );
    this.posts = null;
  }
  
  //Function to get posts.
  getPosts( res ) {
    this.posts = JSON.parse( res.responseText );
    return this.posts;
  }

     //Function to get the posts data.
     getData( res, posts = null ) {
      const self = this;

      res.open( 'GET', wpApiUrl );
      res.onload = function() {
        self.getPosts( res );
      };
      res.send();
     }
   };

   new DisplayPosts();



	

//mobile first screen size debugger
function showViewPortSize(display) {
	if(display) {
		var height = jQuery(window).height();
		var width = jQuery(window).width();
		var mediaQ =null;
		if ($(window).width() > 320 && $(window).width() <= 575) {
			var mediaQ ='sm';
		}else if ($(window).width() > 576 && $(window).width() <=767)  {
			var mediaQ ='md';
		}else if ($(window).width() > 768 && $(window).width() <=1199) {
			var mediaQ = 'lg';
		}else if ($(window).width() > 1200) {
			var mediaQ = 'xl';
		};

		jQuery('body').prepend('<div id="viewportsize" style="font-size:11px;z-index:9999;position:fixed;top:1px;left:5px;color:#fff;background:#000;padding:10px">Height: '+height+'<br>Width: '+width+' <br> Media:  '+mediaQ+'</div>');

		jQuery(window).resize(function() {
			height = jQuery(window).height();
			width = jQuery(window).width();
			if ($(window).width() > 320 && $(window).width() <= 575) {
				var mediaQ ='sm';
			}else if ($(window).width() > 576 && $(window).width() <=767)  {
				var mediaQ ='md';
			}else if ($(window).width() > 768 && $(window).width() <=1199) {
				var mediaQ = 'lg';
			}else if ($(window).width() > 1200) {
				var mediaQ = 'xl';
			};

			jQuery('#viewportsize').html('Height: '+height+'<br>Width: '+width+' <br> Media: '+mediaQ);
		});

	}
}

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    	&& 
    	location.hostname == this.hostname
    	) {
      // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        	scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
          	return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

 		//showViewPortSize(true);



