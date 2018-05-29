'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wpApiUrl = 'http://cameronaudet.com/blog/wp-json/wp/v2/posts/?_embed&per_page=6';
/**
 * DisplayPosts class.
 * @author Original Allen Moore
 * edited by Cameron Audet
 * @extends Vue
 */

var DisplayPosts = function (_Vue) {
  _inherits(DisplayPosts, _Vue);

  function DisplayPosts() {
    _classCallCheck(this, DisplayPosts);

    var props = {
      el: '#app',
      data: {
        posts: null
      },
      created: function created() {
        this.fetchPosts();
      },

      methods: {
        fetchPosts: function fetchPosts() {
          var xhr = new XMLHttpRequest(),
              self = this;

          this.getData(xhr);
        },

        hasThumbnail: function hasThumbnail(post) {
          if (post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes) {
            return post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large;
          }
        },
        getThumbnail: function getThumbnail(post) {
          if (post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url) {
            return post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;
          }
        },
        authorName: function authorName(post) {
          if (post._embedded.author[0].name) {
            return post._embedded.author[0].name;
          }
        },
        categoryName: function categoryName(post) {
          if (post._embedded['wp:term'][0][0].name) {
            return post._embedded['wp:term'][0][0].name;
          }
        },
        categoryLink: function categoryLink(post) {
          if (post._embedded['wp:term'][0][0].link) {
            return post._embedded['wp:term'][0][0].link;
          }
        } //methods		
      } };

    var _this = _possibleConstructorReturn(this, (DisplayPosts.__proto__ || Object.getPrototypeOf(DisplayPosts)).call(this, props));

    _this.posts = null;
    return _this;
  }

  //Function to get posts.


  _createClass(DisplayPosts, [{
    key: 'getPosts',
    value: function getPosts(res) {
      this.posts = JSON.parse(res.responseText);
      return this.posts;
    }

    //Function to get the posts data.

  }, {
    key: 'getData',
    value: function getData(res) {
      var posts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var self = this;

      res.open('GET', wpApiUrl);
      res.onload = function () {
        self.getPosts(res);
      };
      res.send();
    }
  }]);

  return DisplayPosts;
}(Vue);

;

new DisplayPosts();