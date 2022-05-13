import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import { levels, calculateImc, Level } from './helpers/imc'
import { GridItem } from './components/GridItem/GridItem'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculate = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
    } else {
      alert('Preencha os campos')
    }
  }

  const handleBack = () => {
    setToShow(null)
    setWeightField(0)
    setHeightField(0)
  }

  return (

   
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer} >
          asad
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro
            adotado pela Organização Mundial da Saúde para calcular o
            peso ideal de cada pessoa.
          </p>
          <input type="number"
            placeholder="Digite sua altura. Ex: 1.5m"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input type="number"
            placeholder="Digite sua peso. Ex: 60.1kg"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculate} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>

          {!toShow &&
            <div className={styles.grid} >
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig} >
              <div className={styles.rightArrow} onClick={handleBack} > 
              <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>

          }
        </div>

      </div>
    </div>
  )
}

export default App;
