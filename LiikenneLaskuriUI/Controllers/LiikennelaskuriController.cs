using LiikenneLaskuriUI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace LiikenneLaskuriUI.Controllers
{
    public class LiikennelaskuriController : Controller
    {
        private readonly ApplicationDbContext _db;
        [BindProperty]
        public LiikenneLaskuriData LiikenneLaskuri { get; set; }
        public LiikennelaskuriController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            return View();
        }
        #region API Calls
        #endregion
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Json(new { data = await _db.LiikenneLaskuriData.ToListAsync() });
        }
    }
}
