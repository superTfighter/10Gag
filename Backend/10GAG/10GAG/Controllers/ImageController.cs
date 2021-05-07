using Logic;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _10GAG.Controllers
{
    [ApiController]
    [Route("{controller}")]
    public class ImageController : ControllerBase
    {

        ImageLogic logic;

        public ImageController(ImageLogic imageLogic)
        {
            logic = imageLogic;
        }

        [HttpGet]
        public IEnumerable<Image> GetUsers()
        {
            return logic.GetAllImages();
        }

        [HttpPost]
        public void AddImage([FromBody] Image item)
        {
            logic.AddImage(item);
        }

    }
}
