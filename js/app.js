document.addEventListener('prechange', function (event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});

document.addEventListener('init', function (event) {
  var page = event.target;
  console.log(page.id);


  if (page.id === 'home') {
    //JS of tab1
    page.querySelector('#Movie1').onclick = function() {
      document.querySelector('#homemovie').pushPage('detail1.html', {data: {title: id}});
    };
  } else if (page.id === 'search') {
    //JS of tab2
    }
  }

);