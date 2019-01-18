import React from 'react';

export default function Footer(props){
  return (
    <footer className="footer">
      <div className="content-container">
        <ul className="footer-content row">
          <ul className={"col-12 col-sm-6 col-xs-12"}>
            <li><a target={"_blank"} href={"https://www.wikihow.com/Make-Your-Bucket-List"}>How to Make Your Bucket List</a></li>
            <li><a target={"_blank"} href={"https://www.urbandictionary.com/define.php?term=bucket%20list"}>What is the Bucket List</a></li>
            <li><a target={"_blank"} href={"https://www.google.com/search?q=Bucket+List&oq=Bucket+List&aqs=chrome..69i57j69i61j69i59l2j69i60l2.6225j0j7&sourceid=chrome&ie=UTF-8"}>Other...</a></li>
          </ul>
          <div className={"col-12 col-sm-6 col-xs-12"}>
            <a target={"_blank"} href={"#"} className={"app-icon playstore"}/>
            <a target={"_blank"} href={"#"} className={"app-icon appstore"}/>
          </div>
        </ul>
      </div>
    </footer>
  );
};

