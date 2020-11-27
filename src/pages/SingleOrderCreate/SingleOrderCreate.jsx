import React, { useEffect, useState } from "react";
import {
  createOrder,
  getCheckData,
  getOneRestaurant,
  getProfile,
  getAllRestaurants,
 
} from "../../services/services";
import { paginate } from "../../utilities/utilities";
import { useHistory } from "react-router-dom";
import Main from '../../components/Main';
import "./SingleOrderCreate.css";
import RestaurantItem from '../../components/RestaurantItem';
import { map, uniqBy } from 'lodash';
export const SingleOrderCreate = () => {
  const history = useHistory();
  const [restaurantInfo, setRestaurantInfo] = useState("");
  const [orderInput, setOrderInput] = useState("");
  const [profile, setProfile] = useState("");
  const [pollCreator, setPollCreator] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(undefined);
  const [selectedRestaurantName, setSelectedRestaurantName] = useState("");
  const [page, setPage] = useState(0);
  const [filterInput, setFilterInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // eslint-disable-next-line
  const [pollId,setPollId] = 
    useState(localStorage.getItem("orderPollId") 
    ? 
    localStorage.getItem("orderPollId") 
    : 
    '');
    // eslint-disable-next-line
  const [restaurantId,setRestaurantId] = 
      useState(localStorage.getItem("orderRestaurantId") 
      ? 
      localStorage.getItem("orderRestaurantId") 
      : 
      undefined);
  
  useEffect(() => {
   restaurantId && getOneRestaurant(restaurantId).then((res) => {
      console.log(res);
      setRestaurantInfo(res.data);
    });
    selectedRestaurantId && getOneRestaurant(selectedRestaurantId).then((res) => {
      console.log(res);
      setRestaurantInfo(res.data);
    });
    getProfile().then((res) => {
      console.log(res.data);
      setProfile(res.data);
    });
    getAllRestaurants().then((res) => {
      let tmp = res.data
      setRestaurants(map(uniqBy(tmp, 'name')))
    });

  }, [restaurantId,selectedRestaurantId]);

  useEffect(() => {
    if (profile !== "")
      // getCheckData().then((res) => {
      //   console.log(res.data);
      //   console.log(pollId)
      //   let handleCheckData = (el) =>
      //     el.email === profile.email && el.poll === pollId;
      //   console.log(res.data.some(handleCheckData) + " done");

      //   res.data.some(handleCheckData)
      //     ? setPollCreator(true)
      //     : setPollCreator(false);
      //     pollId && setPollCreator(true)
      // })
      // .catch((err) => {
      //   console.log("AXIOS ERROR: ", err);

        
      // });
      restaurantId ? setPollCreator(true) : setPollCreator(false)
  // eslint-disable-next-line
  }, [profile]);

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter((el) =>
        el.name.toLowerCase().includes(filterInput.toLowerCase())
      )
    );
  }, [filterInput, restaurants]);

  const handleFilter = (e) => {
    setFilterInput(e.target.value);
  };

  const handleOrderInput = (e) => {
    setOrderInput(e.target.value);
  };

  const changePage = (index) => {
    setPage(index);
  };
  const handleRestaurantId = (restaurant) => {
    setSelectedRestaurantId(restaurant.id);
    setSelectedRestaurantName(restaurant.name);
  };
  const submitOrderCreateHome = (e) => {
    e.preventDefault();
    const data = { restaurantId: selectedRestaurantId, label: orderInput };
    createOrder(data)
    .then((res) => {
      console.log(res.data.id);
      localStorage.setItem("orderId", res.data.id);
      // setTimeout(function(){ history.push(`/single-order-create/${res.data.id}`); }, 2000);
      history.push(`/single-order-add/${res.data.id}`);

    })
    .catch((err) => {
      console.log(err)
      history.push(`/single-order-create`);
    });
  };

  const submitOrderCreate = (e) => {
    e.preventDefault();
    const data = { restaurantId: restaurantId, label: orderInput };
    createOrder(data).then((res) => {
      console.log(res);
      localStorage.setItem("orderId", res.data.id);
      history.push(`/single-order-add/${res.data.id}`);
    });
  };

  return (
    <Main>
    <h2 className="page-title">Select Restaurant</h2>
    <div className="singleOrderCreate">
      {pollCreator ? (
        <div className='oneRestaurant'>
          <div className='titleWrapper'>
          <div className='restaurantInfo'>Make your order for: </div>
          <div className='restaurantInfo'><strong><h3>{restaurantInfo.name}</h3></strong></div>
          <div className='restaurantInfo'>Visit us at:  {restaurantInfo.address}</div>
          </div>
          <form onSubmit={submitOrderCreate}>
            <input
              type="text"
              onChange={handleOrderInput}
              value={orderInput.label}
              autoComplete="on"
              placeholder="Add Order Name"
              required="yes"
            /><br></br>

            <input type="submit" value = 'Create Your Order' />
          </form>
        </div>
      ) : (
        <div className='createPageFromHome'>
          <div className='allRestaurants'>
            <form>
              <input type="text" placeholder="Search Restaurant by Name" name="name" value={filterInput.name} onChange={handleFilter} className="restaurantInput"/>
            </form>
            {filterInput.length === 0 &&
            paginate(restaurants)[page] !== undefined ? (
              paginate(restaurants)[page].map((el) => (
                <div key={el.id} className="single-restaurant" onClick={() => handleRestaurantId(el)}>
                  <RestaurantItem key={el.id} restaurant={el}/>
                </div>
              ))
            ) : (
              <div className="restaurants-wrapper">
                {filteredRestaurants.slice(0, 4).map((el) => (
                  <div key={el.id} className="single-restaurant" onClick={() => handleRestaurantId(el)}>
                    <RestaurantItem key={el.id} restaurant={el}/>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="pagination">  
            {filterInput.length === 0 &&
              paginate(restaurants)[page] !== undefined &&
              paginate(restaurants).length > 1 && (
                <div className="pagination-buttons">
                  {/* prev */}
                  {paginate(restaurants).map((_, idx) => {
                    return ( 
                      <button  onClick={() => changePage(idx)} key={idx} className={`page-btn ${page === idx && `page-btn-selected`}`}>
                        {idx + 1}
                      </button> 
                    );
                  })}
                </div>
              )}
          </div>

          <div>
            <h3 style={{marginBottom:"10px"}}>{selectedRestaurantName}</h3>
            <form onSubmit={submitOrderCreateHome}>
              
              <input
                type="text"
                onChange={handleOrderInput}
                value={orderInput.label}
                autoComplete="on"
                placeholder='Enter Order Name'
                required="yes"
                className="submitOrderCreateHome"
              />
              <input type="submit" className="bigButton submitOrderCreateHome" value="Next"/>
            </form>
          </div>
        </div>
      )}
    </div>
    </Main>
  );
};
 