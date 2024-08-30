import './Style/App.css'
import { useState } from 'react'
import Button from './Button'
import Input from './Input'

function Wrap() {
    let [count, updateState] = useState(0);
    let [symbol, setSymbol] = useState('');
    let [n1, setN1] = useState(0);

    const up = (n) => {
        const num = Number(n);

        if (!isNaN(num)) {
            updateState(prevCount => prevCount * 10 + num);
        } else if (n === '+' || n === '-' || n === '*'|| n === '/') {
            setSymbol(n);
            setN1(count);
            updateState(0); 
        } else if (n === '=') {
            if (symbol === '') {
                alert('enter operator');
            } else {
                
                const result = eval(`${n1} ${symbol} ${count}`);
                updateState(result);
                setSymbol('');
            }
            
        }
        else if (n === 'C') {
                updateState(0);
                setSymbol('');
                setN1(0);
        }
    }
    return (
        <div className='Wrap' >
            <Input count={count}/>
            <Button className='symbols' to={up} n='C' />
            <Button className='symbols' to={up} n='+' />
            <Button className='symbols' to={up} n='-' />
            <Button className='symbols' to={up} n='*' />
            <Button to={up} n='1' />
            <Button to={up} n='2' />
            <Button to={up} n='3' />
            <Button to={up} n='4' />
            <Button to={up} n='5' />
            <Button to={up} n='6' />
            <Button to={up} n='7' />
            <Button to={up} n='8' />
            <Button to={up} n='9' />
            <Button to={up} n='0' />
            <Button className='symbols' to={up} n='/' />
            <Button className='symbols' to={up} n='=' />
        </div>
    );
}

export default Wrap;
