Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});
if(Notification.permission=='granted'){
  let options={
    body:'asdasdasdasddfdfdfddfdfdf',
    icon:'https://images.unsplash.com/photo-1561478908-d067fe75a553?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    vibrate:[100,50,100]
  }
  new Notification('Notification',options)
}