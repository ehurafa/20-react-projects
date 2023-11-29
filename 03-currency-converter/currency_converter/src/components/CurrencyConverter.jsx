import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  return (
    <div className="converter">
        <h2>Conversor de Moedas</h2>
        <input type="number" placeholder="Digite o valor..." />
        <span>Selecione as moedas</span>
        <select>
            <option value="BRL">BRL</option>
        </select>
        <span>para</span>
        <select>
            <option value="USD">USD</option>
        </select>
        <h3>BRL USD</h3>
        <p>20 BRL vale 5 USD</p>
    </div>
  )
}

export default CurrencyConverter