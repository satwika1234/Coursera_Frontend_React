import React from "react";

function Footer(props) {
    return (
    <div className = "footer">
        <div className=" container">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2 ">
                    <h5>Links</h5>
                    <ul className="list-unstyled ">
                        <li><a href="# ">Home</a></li>
                        <li><a href="aboutus.html ">About</a></li>
                        <li><a href="# ">Menu</a></li>
                        <li><a href="contactus.html ">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5 ">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br></br>
		              Clear Water Bay, Kowloon<br></br>
		              HONG KONG<br></br>
		              <i className="fa fa-phone fa-lg "></i>: +852 1234 5678<br></br>
		              <i className="fa fa-fax fa-lg "></i>: +852 8765 4321<br></br>
		              <i className="fa fa-envelope fa-lg "></i>: <a href="mailto:confusion@food.net ">confusion@food.net</a>
		           </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center ">
                    <div className="text-center ">
                        <a className="btn btn-social-icon btn-google " href="http://google.com/+ "><i class="fa fa-google-plus fa-lg "></i></a>
                        <a className="btn btn-social-icon btn-facebook " href="http://www.facebook.com/profile.php?id="><i class=" fa fa-facebook fa-lg "></i></a>
                        <a className="btn btn-social-icon btn-linkedin " href=" http://www.linkedin.com/in/ "><i class="fa fa-linkedin fa-lg "> </i></a>
                        <a className="btn btn-social-icon btn-twitter " href="http://twitter.com/ "><i class="fa fa-twitter fa-lg "> </i></a>
                        <a className="btn btn-social-icon btn-google " href="http://youtube.com/ "><i class="fa fa-youtube fa-lg "> </i></a>
                        <a className="btn btn-social-icon " href="mailto:confusion@food.net "><i class="fa fa-envelope fa-lg "></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className="col-auto ">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;