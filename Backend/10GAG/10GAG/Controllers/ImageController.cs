using Logic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _10GAG.Controllers
{
    [Authorize]
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
        public IEnumerable<Image> GetImages()
        {
            return logic.GetAllImages();
        }

        [HttpPost]
        public void AddImage([FromBody] Image item)
        {
            logic.AddImage(item);
        }


        [HttpDelete("{uid}")]
        public void DeleteImage(string uid)
        {
            logic.DeleteImage(uid);
        }

    }
}
