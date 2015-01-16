// ecolex ga tracking
window.addEventListener('load', function () {
  // your code here
  console.log('loading: google-analytics-eaudeweb');

  setup_handlers();
}, false);

function setup_handlers() {
  // probably not the best selector
  $(".input-fields > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2) > input:nth-child(5)")
   .click(words_from_title_list);

  $("#go_button").click(simple_search_submit);
  $("input.long_button:nth-child(1)").click(advanced_search_submit);
  console.log("handlers set");
}

function simple_search_submit() {
  console.log("Simple Search");
  ga('send', 'event', 'SimpleSearch', 'Submit', 'SimpleSearch');
}

function advanced_search_submit() {
  title = $("#titleOfText")[0];

  console.log("title value: " + title.value);
  ga('send', 'event', 'AdvancedSearch', 'Submit', 'AdvancedSearch');
}

function words_from_title_list() {
  ga('send', 'event', 'AdvancedSearchOptions', 'List', 'TitleList');
}
