// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 1
// Author: Bui Dang Khoa
// ID: s3978482

// This file is used to generate detail page for each book. It reads the data from detail-page-data.js and generates the HTML for each book. The HTML is then saved in the pages/books directory.
// NOTE: This file is not used in the final product (i.e. it is not used for rendering on the browser)

const fs = require("fs");
const data = require("./detail-page-data");

const makeBreadcrumb = (breadcrumbData) => {
    const { breadcrumb_name, breadcrumb_link } = breadcrumbData;
    let breadcrumb = "";
    for (let i = 0; i < breadcrumb_name.length; i++) {
        breadcrumb += `<a href="${breadcrumb_link[i]}">${breadcrumb_name[i]}</a>\n`;
        if (i !== breadcrumb_name.length - 1) {
            breadcrumb += "<p>></p>\n";
        }
    }
    return breadcrumb;
};

const makeSubImgs = (subImgs) => {
    let subImgsHTML = "";
    for (let i = 0; i < subImgs.length; i++) {
        subImgsHTML += `<img src="${subImgs[i]}" alt="sub_img" />\n`;
    }
    return subImgsHTML;
};

const makeDescrtiption = (descriptions) => {
    let descriptionHTML = "";
    for (let i = 0; i < descriptions.length; i++) {
        descriptionHTML += `<p class="book-desc">${descriptions[i]}</p>\n`;
    }
    return descriptionHTML;
};

const createPageHTML = (pageData) => {
    const { file_name, title, author, desc, cover_img, sub_imgs, price } =
        pageData;
    const page = `
    <!-- 
        RMIT University Vietnam
        Course: COSC2430 Web Programming
        Semester: 2023A
        Assessment: Assignment 1
        Author: Bui Dang Khoa
        ID: s3978482
    -->
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Odyssey: Buy Books, Fiction, Novels</title>
            <link rel="icon" href="../../images/boat.png" />
    
            <!-- Main stylesheet -->
            <link rel="stylesheet" href="../../index.css" />
    
            <!-- CSS Components -->
            <link rel="stylesheet" href="../../css-components/header.css" />
            <link rel="stylesheet" href="../../css-components/footer.css" />
            <link rel="stylesheet" href="../../css-components/book-detail.css" />
        </head>
        <body>
            <!-- Header -->
            <header>
                <!-- Logo -->
                <a href="../../index.html" class="logo">
                    <img src="../../images/boat.png" alt="logo" />
                    <h1>Odyssey</h1>
                </a>

                <!-- Search Bar -->
                <form action="" class="search-field">
                    <input type="text" class="search-bar" placeholder="Search" />
                    <button type="submit" class="search-btn">
                        <img src="../../images/icons/search.png" alt="search" />
                    </button>
                </form>
    
                <!-- Nav Bar -->
                <img
                    src="../../images/icons/menu.png"
                    alt="menu-bar"
                    id="menu-bar"
                />
                <nav id="navbar">
                    <ul>
                        <li><a href="../../index.html">Home</a></li>
                        <li><a href="../special-offers.html">Special Offers</a></li>
                        <li><a href="../best-sellers.html">Best Sellers</a></li>
                        <li><a href="../new-releases.html">New Releases</a></li>
                        <li><a href="../genres.html">Genres</a></li>
                    </ul>
                </nav>
    
                <!-- User and Cart icons -->
                <div class="user-cart">
                    <a class="cart" href="#!">
                        <img src="../../images/icons/white-cart2.png" alt="cart" />
                    </a>
                    <a class="user" href="#!">
                        <img src="../../images/icons/user-icon.png" alt="user" />
                    </a>
                </div>
            </header>
    
            <!-- Main Content -->
            <main>
                <!-- Breadcumb -->
                <div class="breadcrumb">
                ${makeBreadcrumb(pageData)}
                </div>
                
                <div class="book-wrapper">
                    <!-- Images -->
                    <section class="images">
                        <img
                            src=${cover_img}
                            alt="cover"
                            id="main-image"
                        />
                        <div class="sub-images">
                            ${makeSubImgs(sub_imgs)}
                        </div>
                    </section>
    
                    <!-- Book Details -->
                    <section class="detail">
                            <h1 class="book-name">${title}</h1>
                            <h2 class="book-author">${author}</h2>
                        <a class="show-more" href="#!">Show more</a>
                        ${makeDescrtiption(desc)}
                        <h2 class="price">$${price}</h2>
                        <a href="#!" class="add-to-cart">
                            Add to Cart
                            <img
                                class="cart-icon"
                                src="../../images/icons/white-cart2.png"
                                alt=""
                            />
                        </a>
                    </section>
                </div>
            </main>
    
            <!-- Footer -->
            <footer>
                <nav>
                    <ul>
                        <li><a href="#!">About Us</a></li>
                        <li><a href="#!">Privacy Policy</a></li>
                        <li><a href="#!">Terms</a></li>
                        <li><a href="#!">Copyright</a></li>
                        <li><a href="../contact-us.html">Contact Us</a></li>
                    </ul>
                </nav>
                <div id="footer-trademark">
                <a href="../../index.html">
                    <img src="../../images/boat.png" alt="logo"
                /></a>
                <p>© 2023 Odyssey, Inc.</p>
            </div>
            </footer>
        </body>
    </html>
    `;

    return page;
};
const processData = (data) => {
    for (let i = 0; i < data.length; i++) {
        const pageData = data[i];
        const pageHTML = createPageHTML(pageData);
        // Write the HTML file to the ./output/book-detail-pages folder
        fs.writeFileSync(`../pages/books/${pageData.file_name}.html`, pageHTML);
    }
};

const start = () => {
    console.log("Generating detail pages...");
    processData(data);
    console.log("Detail pages generated successfully!");
};
start();
