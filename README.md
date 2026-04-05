# PhotosByFTJ
### A Responsive Photography Portfolio built with React

**PhotosByFTJ** is a minimalist, mobile-first web application designed to showcase high-quality photography across four distinct categories: **Nature, Architecture, Landscape, and Urban/Street**. Built with a focus on clean UI and seamless navigation, this project demonstrates the bridge between custom UI design and functional frontend development.

---

## 🌐 Live Project
**Link:** [photosbyftj.com](https://photosbyftj.com)

## 🚀 Key Features

* **Mobile-First Responsive Design:** Engineered using a `min-width` CSS strategy starting at `1px`. The layout fluidly transitions from vertical content stacks on mobile to wide-screen row formats (optimized for 1470px+ displays) using **Flexbox** and **CSS Grid**.
* **Universal Icon Navigation:** To maintain a "content-first" aesthetic, navigation relies on a consistent icon-based system across all screen sizes. This reduces UI clutter and ensures a familiar experience on any device.
* **Custom SVG Engineering:** All navigation icons (Collections, About, Theme Toggle) were hand-designed in **Figma** and exported as optimized **SVGs** for infinite scalability and high-resolution clarity.
* **Intelligent UX Logic:** * **Scroll Management:** Implemented a custom `ScrollToTop` hook to reset the viewport on route changes, solving the common SPA issue of persistent scroll positions.
    * **Theme Toggle:** Integrated a Dark/Light mode switch to allow users to view photography in their preferred environment.

## 🛠️ Technical Stack

* **Frontend:** React.js
* **Styling:** CSS3 (Advanced Media Queries, Flexbox, Grid)
* **Design:** Figma (UI Prototyping & Asset Creation)
* **Deployment:** GitHub Pages with Custom Domain Mapping
* **Architecture:** Component-based structure with a dedicated `/pages` directory for modularity.

## 📁 Project Structure

The application is built with reusability in mind, separating logic into manageable components:
* `Header` & `Footer`: Global navigation and branding.
* `CollectionsBadge`: Dynamic category identifiers.
* `ScrollToTop`: Navigation utility for UX consistency.
* `ComingSoonNotice`: Scalable placeholder for future gallery expansions.

## 📈 Future Roadmap
* **Backend Migration:** Transitioning from static assets to a custom **Java API**.
* **Cloud Infrastructure:** Leveraging **Oracle Cloud Infrastructure (OCI) Object Storage** for high-performance image hosting and global delivery.
* **Dynamic Metadata:** Implementing automated sorting and filtering for large-scale photo libraries.
### 📸 Responsive Preview (Urban/Street Category)

| Mobile View | Desktop View (1470px) |
| :---: | :---: |
| <img src="./screenshots/mobile_urban.png" width="200" /> | <img src="./screenshots/desktop_urban.png" width="450" /> |

<details>
<summary><b>Click to see other categories (Nature, Architecture, Landscape)</b></summary>

| Category | Mobile | Desktop |
| :--- | :---: | :---: |
| **Nature** | [View](./screenshots/m_nature.png) | [View](./screenshots/d_nature.png) |
| **Architecture** | [View](./screenshots/m_arch.png) | [View](./screenshots/d_arch.png) |
| **Landscape** | [View](./screenshots/m_land.png) | [View](./screenshots/d_land.png) |

</details>
