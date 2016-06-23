import React from 'react';

export default class Footer extends React.Component  {
  render() {
    return (
      <div className="footer row">
        <div className="col-sm-6">
          <i className="fa fa-qrcode"> </i> Example Footer
        </div>
        <div className="col-sm-6 text-right">&copy; 2016</div>
      </div>
    );
  }
}
