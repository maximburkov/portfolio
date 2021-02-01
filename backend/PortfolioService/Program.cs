using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PortfolioService.Models;
using System.Collections.Generic;

namespace PortfolioService
{
    public class Program
    {
        private static void AddTestData(AppContext context)
        {
            var posts = new List<Post>
            {
                new Post
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "Some new post",
                    Text = "Some interesting info in post."
                },
                new Post
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "Cool post",
                    Text = "Some cool post about cool guys."
                },
                new Post
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "Some wise post",
                    Text = "The greatest wisdom is here..."
                }
            };

            context.Posts.AddRange(posts);

            context.SaveChanges();
        }

        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<AppContext>();
                AddTestData(context);
            }

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
