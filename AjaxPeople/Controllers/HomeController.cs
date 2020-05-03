using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AjaxPeople.Models;

namespace AjaxPeople.Controllers
{
    public class HomeController : Controller
    {

        private string _conStr = "Data Source=.\\sqlexpress;Initial Catalog=MySecondDb;Integrated Security=True";

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetAllPeople()
        {
            return View();
        }
    }
}
