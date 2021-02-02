using System;

namespace PortfolioService.Models
{
    public class Comment
    {
        public string Id { get; set; }

        public string PostId { get; set; }

        public DateTime DateCreated { get; set; }

        public string Text { get; set; }

        public string AuthorLogin { get; set; }
    }
}
