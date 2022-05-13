export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}


export const levels: Level[] = [

    {title: 'Magreza', color: '#96a3ab', icon: 'down', imc: [0, 18.59]},
    {title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.99]},
    {title: 'Sobrepeso', color: '#e2b039', icon: 'down', imc: [25, 30]},
    {title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99]}
]

export const calculateImc = (height: number, weight: number) => {
    const imc = Math.round((weight / (height * height)) * 10) / 10;
    for( let i in levels ) {
        let levelCopy: Level = {...levels[i]}
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
            levelCopy.yourImc = imc;
            return levels[i]
        }
    }
    return null
}