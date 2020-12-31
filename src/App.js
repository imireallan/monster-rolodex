import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.component';

function App() {
    const [monsters, setMonsters] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        const fetchMonsters = async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            const monsters = await response.json();
            setMonsters(monsters);
        };

        fetchMonsters();
    }, []);

    const filteredMonsters = monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );

    return (
        <div className="container">
            <h1>Monster Rolodex</h1>
            <div className="search">
                <Search searchText={searchText} onInputChange={setSearchText} />
            </div>
            <div>
                {!monsters.length ? (
                    <Loader
                        type="Bars"
                        color="rgba(0,0,0,0.7)"
                        width={100}
                        style={{
                            display: 'grid',
                            placeItems: 'center',
                            minHeight: '100vh',
                        }}
                    />
                ) : (
                    <CardList monsters={filteredMonsters} />
                )}
            </div>
        </div>
    );
}

export default App;
