'use strict';

function Homepage() {
  return (
          <React.Fragment>
         <div>
           <a href = "/cards">Go to Cards</a>
          </div>
          <div>
          <img src="/static/img/balloonicorn.jpg" />
  </div>
</React.Fragment>);
}
ReactDOM.render(<Homepage />, document.querySelector('#app'));
