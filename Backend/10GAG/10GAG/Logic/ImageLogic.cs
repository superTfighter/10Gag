using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;

namespace Logic
{
    public class ImageLogic
    {
        IRepository<Image> _imageRepository;

        public ImageLogic(IRepository<Image> imageRepository)
        {
            this._imageRepository = imageRepository;
        }

        public IQueryable<Image> GetAllImages() 
        {
            return _imageRepository.Read();
        }

        public void AddImage(Image item) 
        {
            _imageRepository.Add(item);
        }

        public void DeleteImage(string uid) 
        {
            _imageRepository.Delete(uid);
        }
    }
}
