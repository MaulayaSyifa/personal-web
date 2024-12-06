let blogs = []; // length nya adalah 0

function addBlog(e) {
  e.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let imageInput = document.getElementById("input-blog-image");

  if (title == "" || content == "" || imageInput.files.length === 0) {
    return alert("All input fields cannot be empty");
  }

  let image = URL.createObjectURL(imageInput.files[0]);

  let formattedDate = formatDateToWIB(new Date());

  let blog = {
    author: "Karunia Leo G",
    title: title,
    content: content,
    image: image,
    postedAt: formattedDate,
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  console.log(blogs);

  let blogListElement = document.getElementById("blogList");

  blogListElement.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    // menampilkan blogs yang sudah kita buat dengan mengisi form
    console.log(blogs[i]);

    blogListElement.innerHTML += `
        <div id="${i}" class="blog-list-item">
            <div class="blog-image">
              <img src="${blogs[i].image}" alt="blog-image" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" class="blog-item-title">
                  ${blogs[i].title}
                </a>
              </h1>
              <div class="detail-blog-content">
                12 Jul 2024 22:30 WIB | ${blogs[i].author}
              </div>
              <p class="blog-text">
                ${blogs[i].content}
              </p>
            </div>
          </div>
    `;
  }
}

function firstBlogContent() {
  return `
        <div class="blog-list-item">
            <div class="blog-image">
              <img src="assets/blog-img.png" alt="blog-image" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" class="blog-item-title">
                  Blog Title with Javascript
                </a>
              </h1>
              <div class="detail-blog-content">
                12 Jul 2024 22:30 WIB | Karunia Leo G
              </div>
              <p class="blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                explicabo totam labore sit tempore, voluptate vitae nesciunt in
                maiores rerum, vero veritatis numquam iure aut sunt nemo.
              </p>
            </div>
          </div>
    `;
}

function formatDateToWIB(date) {
    let months = ["jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des",];
    let day = date.getDate().toString();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let hours = date.getHour().toString();
    let minutes = date.getMinute().toString();

    let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`
    return formattedDate;
}