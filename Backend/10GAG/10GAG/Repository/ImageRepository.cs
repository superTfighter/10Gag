using Data;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository
{
    public class ImageRepository : IRepository<Image>
    {
        DatabaseContext context = new DatabaseContext();
        public void Add(Image item)
        {
            context.Images.Add(item);
            context.SaveChanges();
        }

        public void Delete(Image item)
        {
            context.Images.Remove(item);
            context.SaveChanges();
        }

        public void Delete(string uid)
        {
            Delete(Read(uid));
        }

        public Image Read(string uid)
        {
            return context.Images.FirstOrDefault(t => t.Uid == uid);
        }

        public IQueryable<Image> Read()
        {
            return context.Images.AsQueryable();
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void Update(string oldid, Image newitem)
        {
            var olditem = Read(oldid);
            olditem.Title = newitem.Title;
            olditem.Rating = newitem.Rating;
            olditem.Base64Image = newitem.Base64Image;
            context.SaveChanges();
        }
    }
}
