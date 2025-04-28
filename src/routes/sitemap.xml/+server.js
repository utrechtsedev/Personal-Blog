// /src/routes/sitemap.xml/+server.js
import * as sitemap from 'super-sitemap';
import fetchPosts from '$lib/assets/js/fetchPosts'

export const prerender = true;
const options = {
  offset: 0,
  limit: 999
}

export const GET = async () => {
  let blogposts = [];
  try {
    const data = await fetchPosts(options);
    if (data && data.posts) {
      blogposts = data.posts.map(post => post.slug);
    }
  } catch (e) {
    console.log(e);
  }
  
  return await sitemap.response({
    origin: 'https://aichou.nl',
    paramValues: {
      '/blog/[post]': blogposts,
      '/blog/category/[category]': [],
      '/blog/category/[category]/page': [],
      '/blog/category/[category]/page/[page]': [],
      '/blog/category/page/[page]': [],
      '/blog/page/[page]': []
    },
  });
};
