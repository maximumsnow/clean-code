function update(button, person = null) {
    if (button === 1) {
        if (person) {
            if (person.age != null) {
                if (person.experience != null) {
                    person.experience += 10;
                    person.age++
                } else {
                    throw new Error('Person experience not set');
                }
            } else {
                throw new Error('Person age not set');
            }
        }
    }
}

