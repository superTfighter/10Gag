using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Image
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Uid { get; set; }

        [StringLength(100)]
        public string Title { get; set; }

        public string Base64Image { get; set; }

        [Range(1, 5)]
        public int Rating { get; set; }

        public string ImageTypeID { get; set; }
        public virtual ImageType ImageType { get; set; }

    }
}
