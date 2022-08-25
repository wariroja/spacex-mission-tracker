# SpaceX mission tracker utilizing GraphQL API 🚀
![2022-08-25 03 23 11](https://user-images.githubusercontent.com/40623643/186641326-800858cb-382f-4fe5-93fd-970aecf2d12d.gif)

### Running the project locally
`npm install` to install all of the dependencies
`npm start` to start the project

## Roadmap

MVP: 
- [x] Fetch data from SpaceX GraphQL api using apollo-clietn & GraphQL
- [x] Impletmented filter 
- [x] Implemented sort 
- [x] Add unit tests

Future improvements:
- [ ] Implement pagination (performance improvement)
- [ ] Refactor functions into smaller components and update TS types (for readability and reusability)
- [ ] Beautify with CSS and mui library

Challenges: 
- Some of the ids from the API are duplicate therefore can't be use as key for mapping, otherwise will generate error on sorting and filtering. Fixed by generating new ids using `crypto.randomUUID()` function
