using Microsoft.AspNetCore.Mvc;

namespace LiikenneLaskuriUI.Controllers
{
    public class ChartsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
