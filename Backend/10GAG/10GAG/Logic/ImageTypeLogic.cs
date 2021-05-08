using Models;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Logic
{
    public class ImageTypeLogic
    {
        IRepository<ImageType> _imageTypeRepository;

        public ImageTypeLogic(IRepository<ImageType> imageTypeRepository)
        {
            this._imageTypeRepository = imageTypeRepository;
        }

        public IQueryable<ImageType> GetAllImageTypes()
        {
            return _imageTypeRepository.Read();
        }

        public void AddImageType(ImageType item)
        {
            _imageTypeRepository.Add(item);
        }
    }
}
