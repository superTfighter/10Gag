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
            context.ImageTypes.Remove(item);
            context.SaveChanges();
        }

        public void Delete(string uid)
        {
            throw new NotImplementedException();
        }

        public ImageType Read(string uid)
        {
            return context.ImageTypes.FirstOrDefault(t => t.UID == uid);
        }

        public IQueryable<ImageType> Read()
        {
            return context.ImageTypes.AsQueryable();
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void Update(string oldid, ImageType newitem)
        {
            throw new NotImplementedException();
        }
    }
}
