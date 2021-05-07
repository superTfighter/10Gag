using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class ImageType
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string UID { get; set; }

        [StringLength(200)]
        public string Title { get; set; }

        public virtual ICollection<Image> Images { get; set; }

        public ImageType()
        {
            Images = new List<Image>();
        }

    }
}
