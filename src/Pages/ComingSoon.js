import React from 'react'
import cloud from '../assets/img/cloud.png'
import logotofnew from '../assets/img/logotofnew.png'
const ComingSoon = () => {
  return (
    <>
     <div class="cloud floating">
        <img src={cloud} alt="Scoop Themes"/>
    </div>

    <div class="cloud pos1 fliped floating">
        <img src={cloud} alt="Scoop Themes"/>
    </div>

    <div class="cloud pos2 floating">
        <img src={cloud} alt="Scoop Themes"/>
    </div>

    <div class="cloud pos3 fliped floating">
        <img src={cloud} alt="Scoop Themes"/>
    </div>


    <div id="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <img src={logotofnew} alt="Scoop Themes Logo"/>
                    <br/>
                    <br/>
                    <h2 class="subtitle">We're working hard to launch our website and we'll be ready very soon</h2>
                    <br/>
             
                     {/* <form class="form-inline validate signup" action="http://scoopthemes.us8.list-manage.com/subscribe/post-json?u=c535e62cabdc2bfeb87bff6de&amp;id=d969b07f82&c=?" method="get" role="form">
                        <div class="form-group">
                            <input type="email" class="form-control" name="EMAIL" id="exampleInputEmail1" placeholder="Enter your email address">
                        </div>
                        <input type="submit" name="subscribe" value="Get notified!" class="btn btn-theme">
                    </form>  */}
                    <br/>
                </div>
                <div class="col-sm-12 align-center">
                    <ul class="social-network social-circle">
                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li><a href="#" class="icoGit" title="Github"><i class="fa fa-github"></i></a>
                        </li>
                        <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-lg-offset-3">
                    <p class="copyright">Copyright &copy; 2023 - <a href="http://theopenfactory.digital">The OpenFactory</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ComingSoon