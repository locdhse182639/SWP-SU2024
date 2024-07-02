using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BE_V2.DataDB;
using System.Linq;
using System.Threading.Tasks;

namespace BE_V2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiamondPriceController : ControllerBase
    {
        private readonly DiamondShopV4Context _context;

        public DiamondPriceController(DiamondShopV4Context context)
        {
            _context = context;
        }

        // GET: api/DiamondPrice?carat=0.2&color=E&clarity=VVS1&cut=Ideal
        [HttpGet]
        public async Task<ActionResult<DiamondPriceTable>> GetDiamondPrice(decimal carat, string color, string clarity, string cut)
        {
            var diamondPrice = await _context.DiamondPriceTable
                .Where(d => d.Carat == carat && d.Color == color && d.Clarity == clarity && d.Cut == cut)
                .FirstOrDefaultAsync();

            if (diamondPrice == null)
            {
                return NotFound();
            }

            return diamondPrice;
        }

        // GET: api/DiamondPrice/Attributes
        [HttpGet("Attributes")]
        public async Task<ActionResult<DiamondAttributes>> GetDiamondAttributes()
        {
            var carats = await _context.DiamondPriceTable.Select(d => d.Carat).Distinct().ToListAsync();
            var colors = await _context.DiamondPriceTable.Select(d => d.Color).Distinct().ToListAsync();
            var clarities = await _context.DiamondPriceTable.Select(d => d.Clarity).Distinct().ToListAsync();
            var cuts = await _context.DiamondPriceTable.Select(d => d.Cut).Distinct().ToListAsync();

            var attributes = new DiamondAttributes
            {
                Carats = carats,
                Colors = colors,
                Clarities = clarities,
                Cuts = cuts
            };

            return attributes;
        }
    }

    public class DiamondAttributes
    {
        public List<decimal> Carats { get; set; }
        public List<string> Colors { get; set; }
        public List<string> Clarities { get; set; }
        public List<string> Cuts { get; set; }
    }


}
