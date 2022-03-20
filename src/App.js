import "./App.css";
import { connectWallet } from "./connect";
import React, {useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import {getSize, createCow, getCow} from './connect'
import * as faker from '@faker-js/faker';
import Card from "./components/card";

let first = true

function App() {
  if(first){
    connectWallet();
    first = false
  }

  
  let y = Math.random()
  // let x = createCow("0xFc8706d39Ca7af0441cc8f3C10242B5571A3171E", 10, 200, 600, "FiléCorno", "FiléCornotHENAME", "Vaquinha criada com o intúito de retirar cirurgicamente os chifres do filé", "x.com");
    const data = new Array(1000).fill().map((value, id) => (({
      id: id,
      title: Math.random(),
      name: Math.random(),
      body: Math.random(),
      min:  y,
      goal: y*y*y*y
      


    })))

  
  

  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next))
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CowFunding</h1>
        
        <div className="wrap">
          <p id="middlebox" style={{paddingInlineStart: '10px', paddingBlockStart: '10px', paddingInlineEnd: '10px', paddingBlockEnd: '10px', fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif', backgroundColor: 'rgb(179, 127, 127)'}}>
            <a href="http://127.0.0.1:5500/lilcow/front-lilcow/Youchoseone.html" style={{textDecoration: 'none'}}><b>Ox</b></a>
            <button type="submit" style={{borderRadius: '10px', backgroundColor: 'rgb(146, 132, 132)'}}><b>Withdraw</b> </button><br/>
            
            <i>Daniel Cavassani</i><br/>
            I love oxen.<br /><br/>
            <mark style={{borderRadius: '5px', backgroundColor: 'gray'}}>Minimum Donation:</mark> 1 ETH.
            <br/>
            <mark style={{borderRadius: '5px', backgroundColor: 'gray'}}>Goal:</mark> 301k ETH.
            <button type="submit" style={{borderRadius: '10px', backgroundColor: 'rgb(146, 132, 132)'}}><b>Donate!</b> </button>
          </p>

        </div>
        <Card
          name="vaquinha 1"
          description="skdkasnjfaboajsodnasaksfoans"
          preço={5}
        ></Card>
        <InfiniteScroll
          dataLength={current.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div>
            {current && current.map(((item, index) => (
              <div key={index} className="post">
                <div className="wrap">
                <p id="middlebox" style={{paddingInlineStart: '10px', paddingBlockStart: '10px', paddingInlineEnd: '10px', paddingBlockEnd: '10px', fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif', backgroundColor: 'rgb(179, 127, 127)'}}>
                  <button type="submit" style={{borderRadius: '10px', backgroundColor: 'rgb(146, 132, 132)'}}><b>Withdraw</b> </button>
                  <a href="http://127.0.0.1:5500/lilcow/front-lilcow/Youchoseone.html" style={{textDecoration: 'none'}}><b>{item.title}</b> </a>
                  <i>{item.name}</i><br />
                  {}<br /><br/>
                  <mark style={{borderRadius: '5px', backgroundColor: 'gray'}}>Minimum Donation:</mark> {item.min} ETH.
                  <br />
                  <mark style={{borderRadius: '5px', backgroundColor: 'gray'}}>Goal:</mark> {item.goal} ETH.
                  <button type="submit" style={{borderRadius: '10px', backgroundColor: 'rgb(146, 132, 132)'}}><b>Donate!</b> </button>
                </p>

        </div>
              </div>
            )))
            }
      </div>
    </InfiniteScroll>


          
      </header>
    </div>
  );
}

export default App;
