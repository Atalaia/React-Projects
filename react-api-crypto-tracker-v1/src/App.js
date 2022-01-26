import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.css';
import Coin from './Coin';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filterItems = useCallback(() => {
    setFilteredCoins(
      coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLocaleLowerCase()))
    )
  }, [coins, search]);

  useEffect(() => {
    filterItems();
  }, [filterItems]);

  // const filteredCoins = coins.filter(coin =>
  //   coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  // );

  const sortPriceChangeAsc = () => {
    setFilteredCoins([...filteredCoins].sort((a, b) => {
      return a['price_change_percentage_24h'] - b['price_change_percentage_24h']
    }
    ));
  }

  const sortPriceChangeDesc = () => {
    setFilteredCoins([...filteredCoins].sort((a, b) => {
      return b['price_change_percentage_24h'] - a['price_change_percentage_24h']
    }
    ));
  }

  const resetOrder = () => {
    return filterItems();
  }

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input' onChange={handleChange} />
        </form>
      </div>
      <div className='coin-filter mb-4'>
        <Dropdown className="d-inline coin-filter-dropdown">
          <DropdownButton
            id="dropdown-basic"
            title='Sort by... '
            variant='secondary'
            menuVariant='dark'
            drop='down'
            className='mb-4 coin-filter-dropdown-btn'
          >
            <Dropdown.Item
              onClick={sortPriceChangeAsc}
            >
              Price change percentage 24h: Low to High
            </Dropdown.Item>
            <Dropdown.Item
              onClick={sortPriceChangeDesc}
            >
              Price change percentage 24h: High to Low
            </Dropdown.Item>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item
              onClick={resetOrder}
            >
              Reset default order
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
