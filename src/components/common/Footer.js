import React, { Component } from 'react';
import '../../styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer id="footer-text">
          <p className="made-by">Made by: <a id="lallie" href="https://github.com/LallieDragon">LallieDragon</a></p>
        </footer>
      </div>
    );
  }
}
