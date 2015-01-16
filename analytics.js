// ecolex ga tracking
window.addEventListener('load', function () {
  // your code here
  console.log('loading: google-analytics-eaudeweb.');

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58379026-1', 'auto');
  ga('send', 'pageview');

  setup_handlers();
}, false);

function setup_handlers() {
  $(".short_button").click(advanced_list_button_click);

  // search results indexHits restrict links
  $(".indexHits a").click(index_hit_filter_click);

  $("#go_button").click(simple_search_submit);
  $("input.long_button:nth-child(1)").click(advanced_search_submit);
  console.log("handlers set");
}

function simple_search_submit() {
  ga('send', 'event', 'SimpleSearch', 'Submit', 'SimpleSearch');
}

function advanced_search_submit() {
  title = $("#titleOfText")[0];

  ga('send', 'event', 'AdvancedSearch', 'Submit', 'AdvancedSearch');
}

function advanced_list_button_click() {
  ga('send', 'event', 'AdvancedSearchOptions', 'List', this.parentElement.children[1].name);
}

function list_button_clicked() {
  ga('send', 'event', 'AdvancedSearchOptions', 'List', 'TitleList');
}

function index_hit_filter_click() {
  text = this.innerHTML.split(' ')[0];
  ga('send', 'event', 'AdvancedSearchOptions', 'List', text);
}
