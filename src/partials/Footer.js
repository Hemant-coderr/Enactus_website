// FOOter above part
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Projects</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">SANA</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">M</Link>
              </li>                          
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Misc</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Gallary</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Events</Link>
              </li>

            </ul>
          </div>

          

          


          {/* 5th block */}
          <div className="sm:col-span- md:col-span-3 lg:col-span-4">
            <h6 className="text-gray-800 font-medium mb-2 ">Home</h6>            
          </div>

        
          
          
{/* image block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <img width="1000px" src={require('../partials/image/logo.png').default} ></img>
          
            
          </div>
          </div>

        {/* Bottom area */}
        <div  className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 bg-bl;">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 ">
            <li>
             <a href="https://instagram.com/enactushivaji?utm_medium=copy_link" ><img classname="mr-4" src="https://th.bing.com/th/id/OIP.ad2DpMXTtD83qzTVxqFtSQHaHa?pid=ImgDet&w=512&h=512&rs=1" height="35px" width="35px"></img></a>
            </li>

            <li>
            &nbsp; &nbsp;
            </li>
            
            <li>
             <a href="https://youtube.com/channel/UC58D-C5E7OVdYlSmtBFZqyg" ><img src="https://th.bing.com/th/id/R.56e7a8cdd28ca8bd3e5fd370f98fa45c?rik=ZPgXwyUHjhikJA&riu=http%3a%2f%2fwww.vectorico.com%2fdownload%2fsocial_media%2fyoutube-red-circle.png&ehk=rHA2GSHGCa%2fZo3XC359SltucGOBNw8rKLNsw1QpSGDk%3d&risl=&pid=ImgRaw&r=0" height="35px" width="35px"></img></a>
            </li>

            <li>
            &nbsp; &nbsp;
            </li>
            
            <li>
             <a href="https://www.linkedin.com/company/enactus-shivaji-college" ><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" height="35px" width="35px"></img></a>
            </li>

            <li>
            &nbsp; &nbsp;
            </li>
            
           
          
            <li>
             <a href="https://www.facebook.com/enactushivajiofficial/" ><img src="https://th.bing.com/th/id/OIP.1x5qs5pV6hF3ePLEYp94XgHaHa?pid=ImgDet&rs=1" height="35px" width="35px"></img></a>
            </li>
          </ul>
          

          {/* Copyrights note */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              
            </div>
            <div className="text-sm text-gray-600">
              <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link> | <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Copyright © 2021 Enactus Shivaji</Link>
            </div>
          </div>
    

        </div>
  

      
        
        
        

        
        </div>
    </footer>
  );
}

export default Footer;
