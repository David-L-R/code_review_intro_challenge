# HINTS

## Exercise 1

Tip 1:

If we only need one character, then we can use `.find()`.

Tip 2:

```js
const findCharacterUnknownBirthDate = () => {
  return characters.find((character) => {
    // CODE HERE :)
  });
};
```

Tip 3:

We only want a character that is birthday is unknown:

```js
characters.find(
  (character) => character.birth_year === "<what needs to be here?"
);
```

## Exercise 2

Tip 1:

We want ALL characters that their birth date is known!
In other words, we want to FILTER all characters that their birth year is UNKNOWN.

Tip 2:

```js
const charactersWithKnownBirthDate = () => {
  return characters.filter((character) => {
    // CODE HERE :)
  });
};
```

Tip 3:

```js
characters.filter((character) => {
  character.birth_year !== "<what needs to be here?>";
});
```

## Exercise 3

Tip 1:

We want to return characters that:

```js
180 < character.height < 200;
```

Tip 2:

So the condition will be

```js
if (180 < character.height && character.height < 200)
```

Tip 3:

YOU CAN CHANGE ANY CODE INSIDE THE FUNCTION!

```js
const charactersWithMediumHeight = () => {
  const MIN_HEIGHT = 180;
  const MAX_HEIGHT = 200;
};
```

Tip 4:

We want to filter...

```js
const charactersWithMediumHeight = () => {
  const MIN_HEIGHT = 180;
  const MAX_HEIGHT = 200;

  return characters.filter((character) => {
    // YOUR CODE HERE :)
  });
};
```

Tip 5:

We will return the condition :)

```js
characters.filter((character) => (MIN_HEIGHT < character.height && ...));

```

## Exercise 4

Tip 1:

Return "ONLY"? So we need to FILTER!

Tip 2:

We can adjust the code inside the function:

```js
// Instead of
const SKIN = "";
const EYES = "";
const SEX = "";

// We will do

const SKIN = "fair";
const EYES = "blue";
const SEX = "female";
```

Tip 3:

Let's filter

```js
const charactersFemaleBlueEyesFairSkin = () => {
    const SKIN = "fair";
    const EYES = "blue";
    const SEX = "female";

    return characters.filter(character => ( /* YOUR CODE HERE */ ))
};
```

Tip 4:

What should be in the filter?

```
(character.skin_color === SKIN && ... )
```

## Exercise 5

Tip 1:

We want to return all of the characters, so `.find()` and `.filter()` are out of the question.

We want to transform each character object to a different structure.

When we want to change the content of each item in an array, we should use... `.map()`!

Tip 2:

```js
const formatCharacters = () => {
  return characters.map(character => ...)
};
```

Tip 3:

```js
const formatCharacters = () => {
  return characters.map((character) => ({
    // HERE WE CAN WRITE ALL THE RELEVANT FIELDS
  }));
};
```

Tip 4:

```js
const formatCharacters = () => {
  return characters.map(character => ({
      name: character.name,
      height: ...,
      mass: ...,
  }))
};
```

## Exercise 6

Tip 1:

Like exercise 5, we need to create a new structure for each character. So we can use `.map()`

Tip 2:

```js
const formatCharacters = () => {
  return characters.map(character => ...)
};
```

Tip 3:

Return the object with the structure we desire:

```js
const formatCharacters = () => {
  return characters.map(character => ({
      name: ...,
      traits: {
          height: ...,
          mass: ...,
          colors: [ ... ]
      }
  }))
};
```

Tip 4:

Use `character.somthing` to get the value:

```js
const formatCharacters = () => {
  return characters.map(character => ({
      name: character.name,
      traits: {
          height: ...,
          mass: ...,
          colors: [ ... ]
      }
  }))
};
```

## Exercise 7

Now we go step up!

We need to combine two different data entries - characters and planets.

Tip 1:

Return only name and homeworld

```js
const charactersWithHomeWorld = () => {
  return characters.map((character) => {
    return {
      name: character.name,
      homeworld: character.homeworld,
    };
  });
};
```

`console.log` and check what you get from homeworld.

Now go to planets.json and check to which `character.homeworld` string is equal to. This field will be the one you will use the find the planet.

Think about it as an "id" of the planet.

Tip 2:

For each homeworld, find the correct one in the `planets` array:

```js
const charactersWithHomeWorld = () => {
  return characters.map((character) => {

    const homeworld = planets.find(planet => ... )

    return {
      name: character.name,
      homeworld, // now this will be what we find
    };
  });
};
```
