// ======= "this" is an other problem =======
function NamedOne(first, last) {
    // -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
}

NamedOne.prototype = {
    get firstName() {
        return this._firstName;
    },
    set firstName(value) {
        this._firstName = value;
        this.fullName = this._firstName + ' ' + this._lastName;
    },
    get lastName() {
        return this._lastName;
    },
    set lastName(value) {
        this._lastName = value;
        this.fullName = this._firstName + ' ' + this._lastName;
    },
    get fullName() {
        return this._fullName;
    },
    set fullName(value) {
        var names = value.split(' ');
        if (names.length === 2) {
            this._firstName = names[0];
            this._lastName = names[1];
            this._fullName = this._firstName + ' ' + this._lastName;
        }
    }
};


// ======= "Who likes it?" =======
function likes(names) {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this"
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
}


// ======= Convert string to camel case =======
function toCamelCase(str) {
    let words = str.split(/[-_]/);
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return result;
}