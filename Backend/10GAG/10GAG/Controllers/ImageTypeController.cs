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
    public class ImageTypeController : ControllerBase
    {

        ImageTypeLogic logic;

        public ImageTypeController(ImageTypeLogic imageTypeLogic)
        {
            logic = imageTypeLogic;
        }

        [HttpGet]
        public IEnumerable<ImageType> GetImages()
        {
            return logic.GetAllImageTypes();
        }

        [HttpPost]
        public void AddImage([FromBody] ImageType item)
        {
            logic.AddImageType(item);
        }

        [HttpDelete("{uid}")]
        public void DeleteImageType(string uid)
        {
            logic.DeleteImageType(uid);
        }
    }
}
