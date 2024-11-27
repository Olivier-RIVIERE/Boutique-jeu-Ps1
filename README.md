
![Logo](../boutique/public/assets/img/1716296373896.jpg)


# Today's Exercise: E-Commerce Store with ReactJS and Bulma Integration 🎮

In this project, I created an e-commerce store using ReactJS, featuring a responsive navigation menu and integrating the Bulma CSS framework. The store is focused on selling retro PS1 games and includes a dynamic product listing. The menu adapts for both desktop and mobile views 💻📱.

Key Features:
Responsive Navigation Menu: Utilized React and Bulma to create a fully responsive menu with a burger icon that toggles the visibility of the navigation links in mobile view.
Product Cards: Displayed retro PS1 games with images, descriptions, prices, and stock quantities, all fetched from a mock data array.
Bulma CSS: Leveraged Bulma’s utility classes to style the layout, making it flexible and responsive.
Through this project, I strengthened my skills in ReactJS component structure, state management with useState, event handling, and integrating a CSS framework (Bulma) to create a user-friendly and responsive interface.


## Screenshots

![App Screenshot](../boutique/public/assets/img/Capture%20d'écran%202024-11-27%20162918.png)
![App Screenshot](../boutique/public/assets/img/Capture%20d'écran%202024-11-27%20162939.png)
![App Screenshot](../boutique/public/assets/img/Capture%20d'écran%202024-11-27%20162949.png)


## Code Exemple
```javascript
const dataMenu = [
  {
    titre: "Boutique",
    url: "#",
  },
  {
    titre: "Panier",
    url: "#",
  },
  {
    titre: "Contact",
    url: "#",
  }
]

const Navigation = () => {
  return (
    <nav className='navbar is-fixed-top is flex is-justify-content-space-between'>
      {/* La props children (ici"Ceppic) sera systematiquement au format string */}
      <div className='navbar-brand is flex is-align-items-center'>
        <Logo>Retro Game</Logo>
        {/* dataMenu (le 1er) est un props (un attribut)*/}
        <div className="navbar-burger is-hidden-desktop">
          <Burger></Burger>
        </div>
      </div>
      <UlMenu dataMenu={dataMenu}></UlMenu>
      <div className="navbar-item is-flex is-align-items-center is-justify-content-flex-start is-hidden-touch">
        <Search></Search>
      </div>
    </nav>
  )
}
```
## Languages

HTML
CSS
Javascript
React
## License

[MIT](https://choosealicense.com/licenses/mit/)

