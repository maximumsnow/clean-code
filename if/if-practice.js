const peanutButterAndJelly = (hungry, sandwich = null) => {
    if (hungry) {
        if (sandwich) {
            if (sandwich.bread != null) {
                if (sandwich.peanutButter != null) {
                    if (sandwich.jelly != null) {
                        sandwich.peanutButterAndJelly += 1;
                    } else {
                        throw new Error('No Jelly for a PBJ sandwich');
                    }
                } else {
                    throw new Error('No Peanut Butter for a PBJ sandwich');
                }
            } else {
                throw new Error('No bread for sandwich');
            }
        }
    }
}