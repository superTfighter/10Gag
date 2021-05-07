using Data;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository
{
    public class ImageTypeRepository : IRepository<ImageType>
    {
        DatabaseContext context = new DatabaseContext();
        public void Add(ImageType item)
        {
            context.ImageTypes.Add(item);
            context.SaveChanges();
        }

        public void Delete(ImageType item)
        {
            throw new NotImplementedException();
        }

        public void Delete(string uid)
        {
            throw new NotImplementedException();
        }

        public ImageType Read(string uid)
        {
            throw new NotImplementedException();
        }

        public IQueryable<ImageType> Read()
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public void Update(string oldid, ImageType newitem)
        {
            throw new NotImplementedException();
        }
    }
}
