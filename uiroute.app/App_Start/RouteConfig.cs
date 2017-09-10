using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace uiroute.app
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //this route disales the about and contact <VC menu items
            //routes.MapRoute(
            //   name: "multipleview",
            //   url: "multipleview/{*.}",
            //  defaults: new { controller = "Home", action = "Index" });
            routes.MapRoute(
               name: "HomeCatchAllRoute",
               url: "home/{*.}",
               defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
           );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
