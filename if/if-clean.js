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