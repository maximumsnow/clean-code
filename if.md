# Clean Code IF

## Dirty Code

The following example is dirty code because the code that executes is nested 4 if statements deep and is not easy to read.

```javascript
function update(button, person = null) {
  if (button === 1) {
    if (person) {
      if (person.age != null) {
        if (person.experience != null) {
          person.experience += 10;
          person.age++;
        } else {
          throw new Error("Person experience not set");
        }
      } else {
        throw new Error("Person age not set");
      }
    }
  }
}
```

---

## Logical Combination

If two nested "IF" statements do not have code outside of the IF block and both do not have else conditions then they can be merged to a single IF condition

```javascript
        if (button === 1) {
            if (person) {
```

The first IF condition does not contain code and they both do not contain else blocks so they can be combined to

```javascript
    if (button === 1 && person) {
```

The following nested IF statements cannot be combined because they both have else statements

```javascript
if (person) {
  if (person.age != null) {
    person.experience += 10;
    person.age++;
  } else {
    throw new Error("Person experience not set");
  }
} else {
  throw new Error("Person age not set");
}
```

## Early Return

If no statements exist outside the IF block then no code will run if the IF block isn't executed. In this case the IF statement can usually be inverted and changed to an Early Return.

```javascript
    if (person) {
        if (person.age != null) {

```

In the above nested IF block meets the criteria listed above and can be combined and inverted to look like

```javascript
if (button !== 1 || !person) {
  return;
}
```

### Guard Clause

The pattern of excluding certain conditions at the begining of a code block is called a Guard Clause. With the guard clause our code now looks like:

```javascript
    function update(button, person = null) {
        if (button !== 1 || !person) {return};

        if (person.age != null) {
            if (person.experience != null);
                person.experience += 10;
                person.age++;
            } else {
                throw new Error('Person experience not set');
            }
        } else {
            throw new Error('Person age not set');
        }
    }
```

The other common Guard Clause is where you throw an exception. We can see an example of that in the if (person.age != null) condition where the else block throws an exception. This Guard Clause does not need to wrap the if (person.experience) IF statement so it is better to remove the nesting like the following:

```javascript
    function update(button, person = null) {
        if (button !== 1 || !person) {return;}
        if (person.age == null) { throw new Error('Person age not set'); }

            if (person.experience != null);
                person.experience += 10;
                person.age++;
            } else {
                throw new Error('Person experience not set');
            }
    }
```

Looking at the (person.age) IF block we can take the same steps and change it to a Guard Clause and remove the else statement.

```javascript
function update(button, person = null) {
  if (button !== 1 || !person) {
    return;
  }
  if (person.age == null) {
    throw new Error("Person age not set");
  }
  if (person.experiance == null) {
    throw new Error("Person experience not set");
  }

  person.experience += 10;
  person.age++;
}
```

In the above code the purpose of the function is much easier to read than it was before.

Note: For more information about inverting when creating Guard Clauses google **De Morgan's Law**
