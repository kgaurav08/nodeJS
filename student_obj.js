const student = {
    name: 'gaurav',
    age: 25,
    greet() {
        console.log('hiiii, i m ' + this.name);
    }
};
student.greet();