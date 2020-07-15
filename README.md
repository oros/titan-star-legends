# titan-star-legends

## Getting Started

Clone the repository.

```
git clone git@github.com:oros/titan-star-legends.git
```

Install dependencies in your local development environment.

```
titan-star-legends > npm install
```

Run the node server.

```
titan-star-legends > npm start
```

Navigate to http://localhost:3000 in your browser.

## Decisions
- Prototyped with four Talent paths across four responsive breakpoints; the aim was to build for more edge-cases.
- Instead of right-click to remove points, left-clicking a selected talent will unselect that talent. Overriding default browser behaviour for right-click context menus can be a slippery slope.
- Rudimentary loadout sharing through stringified/encoded URL that updates as the loadout changes.
- Allowed for clicking any Talent and best-attempt auto-selecting/deselecting the necessary Talents.

## Resources
- [Create a React App From Scratch](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
- [Adding TypeScsript to React](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
- [CSS Modules](https://programmingwithmosh.com/react/css-modules-react/)
- [Integrating SASS](https://scotch.io/starters/react/adding-sass-to-create-react-app-applications)
- [CSS Sprites](https://css-tricks.com/css-sprites/)
