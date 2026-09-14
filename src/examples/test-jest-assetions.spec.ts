describe('Primitive values', () =>{
    it('should test jest assertions', () => {
        const number = 10

        expect(number).toBe(10)// se o valor é o mesmo
        expect(number).toEqual(10)//se DOIS ITENS DIFERENTES são iguais

        expect(number).not.toBeFalsy()
        expect(number).toBeTruthy()

        expect(number).toBeGreaterThan(9)
        expect(number).toBeLessThan(11)

        expect(number).toBeCloseTo(9.99999)
        expect(number).toHaveProperty("toString")
    })
})

describe('Objects', () =>{
    it('should test jest assertions with objects', () => {

        const person = { name: 'Joao', age: 20 }
        const anotherPerson = { ...person }

        expect(person).toEqual(anotherPerson)
        expect(person).toHaveProperty('age', 20)

        expect(person.age).toBe(20)

    })
})