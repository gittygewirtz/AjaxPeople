using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AjaxPeople.Models;
using AjaxPeople.Data;

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
            var db = new PeopleDb(_conStr);
            return Json(db.GetAllPeople());
        }

        public IActionResult AddPerson(Person person)
        {
            var db = new PeopleDb(_conStr);
            db.AddPerson(person);
            return Json(person);
        }

        [HttpPost]
        public IActionResult EditPerson(Person person)
        {
            var db = new PeopleDb(_conStr);
            db.EditPerson(person);
            return Json(person);
        }

        [HttpPost]
        public IActionResult DeletePerson(int id)
        {
            var db = new PeopleDb(_conStr);
            db.DeletePerson(id);
            return Json(id);
        }
    }
}
