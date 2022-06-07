class A {
    foo() {

        const o = {
            name: 'John',
            //f: () => console.log(this.name)
        }
        const f = () => console.log(this.name);
        const f2 = f.bind(o)
        f2()
    }

    name = "Alex"
}

const a = new A()
a.foo()