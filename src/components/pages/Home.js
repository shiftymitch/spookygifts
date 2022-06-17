import React, { useEffect, useState } from 'react';
import Card from "../Card";
import productList from "../productList.json";
// import Button from "../Button";

const Home = props => {

    const [sort, setSort] = useState([]);
    
    useEffect(() => {
        setSort(productList); 
    }, []);

    let sortDec = JSON.parse(JSON.stringify(productList.sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? -1 : 1)));

    let sortAsc = JSON.parse(JSON.stringify(productList.sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? -1 : 1).reverse()));

    function setSortAsc() {
        setSort(sortAsc);
    }
    
    function setSortDec() {
        setSort(sortDec);
    }
    
    function setSortFeat() {
        let yesFeat = JSON.parse(JSON.stringify(productList.filter((a) => a.featured === "yes")));
        let noFeat = JSON.parse(JSON.stringify(productList.filter((a) => a.featured !== "yes")));
        Array.prototype.push.apply(yesFeat,noFeat);
        setSort(yesFeat);
    }

    return (
        <div className="container">
            <div className="row justify-content-around top-headline">
                <h1>
                    Looking for the perfect spooky gift?
                </h1>
                <h2>
                    Check these out!
                </h2>
            </div>
            {/* Filters */}
            <div className="filter-row">
                <hr className="row"></hr>
                    <div className="row">Sort By</div>
                    <div className="row">
                        <div className="col btn btn-secondary m-1" onClick={setSortAsc}>Lowest Price</div>
                        <div className="col btn btn-secondary m-1" onClick={setSortFeat}>Hot</div>
                        <div className="col btn btn-secondary m-1" onClick={setSortDec}>Highest Price</div>
                    </div>
                <hr className="row"></hr>
            </div>
            {/* Product List Starts */}
            <div className="row justify-content-around">
                {sort.map(product => {
                    return (
                        <Card
                            key={product.id}
                            description={product.description} 
                            id={product.id}
                            img={product.img} 
                            buy={product.buy} 
                            name={product.name} 
                            view={product.view} 
                            price={product.price}
                            web={product.web}
                            featured={product.featured}
                            >
                        </Card>
                    );
                })}
            </div>
            {/* <Button btnText="about →" link={"/about"}/> */}
        </div>
    )
}

export default Home;