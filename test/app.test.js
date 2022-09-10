describe("[APP] prueba general",() =>{
    test ("Retorno esperado",()=>{
        const a = 4;
        const b = 4;
        const total = a + b;
        expect(total).toEqual(8);
    });
});