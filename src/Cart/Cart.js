import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Container, Paper, Typography } from "@mui/material";
import "./Cart.css";

export default function Cart() {
  const productList = useSelector((state) => state.productsListArr);
  const dispatch = useDispatch();
  const [cartDataArr, setCartDataArr] = useState();
  // useEffect(() => {
  //   setData();
  // }, []);

  // const setData = () => {
  //   const newArr = [...productList];
  //   newArr.filter((item) => {
  //     return (item.isAddedToCart = true);
  //   });
  //   console.log("newArr :: ", newArr);
  // };

  const onPressAddItem = (index) => {
    const newArr = [...productList];
    newArr[index].defaultQty = newArr[index].defaultQty + 1;
    dispatch({ type: "ADD_REMOVE_TO_CART", payload: newArr });
  };

  const onPressRemoveItem = (index) => {
    const newArr = [...productList];
    if (newArr[index].defaultQty !== 0) {
      newArr[index].defaultQty = newArr[index].defaultQty - 1;
      dispatch({ type: "ADD_REMOVE_TO_CART", payload: newArr });
    }
  };

  const onPressRemoveItemFromCart = (index) => {
    const newArr = [...productList];
    newArr[index].isAddedToCart = false;
    newArr[index].defaultQty = 0;
    dispatch({ type: "ADD_REMOVE_TO_CART", payload: newArr });
  };

  return (
    <div>
      <Grid
        className="header"
        container
        direction={"row"}
        justifyContent={"center"}
      >
        <h1 className="headerText">My Cart</h1>
      </Grid>
      <Container>
        <h3>Product Details</h3>
        <Grid container spacing={2} sx={{ marginBottom: 5 }}>
          {productList.length > 0 ? (
            productList.map((item, index) => {
              return (
                <>
                  <Grid item md={12}>
                    <Paper elevation={2}>
                      <Grid
                        container
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <img src={item.imageLink} alt={item.id} />
                        <Grid item flexDirection={"row"} sx={{ marginLeft: 2 }}>
                          <h4 className="itemTitle">Product Name</h4>
                          <h2>{`Product ${item.id}`}</h2>
                        </Grid>
                        <Grid
                          item
                          flexDirection={"row"}
                          sx={{
                            marginLeft: 2,
                          }}
                        >
                          <Grid alignSelf={"center"}>
                            <h4 className="itemTitle">Quantity</h4>
                          </Grid>
                          <Grid
                            container
                            flexDirection={"row"}
                            alignItems={"center"}
                            sx={{ marginBottom: 2 }}
                          >
                            <Button
                              variant="outlined"
                              onClick={() => onPressAddItem(index)}
                            >
                              +
                            </Button>
                            <Typography
                              variant="h7"
                              sx={{ marginLeft: 1, marginRight: 1 }}
                            >
                              {item.defaultQty}
                            </Typography>
                            <Button
                              variant="outlined"
                              onClick={() => onPressRemoveItem(index)}
                            >
                              -
                            </Button>
                          </Grid>
                          <Button
                            variant="contained"
                            onClick={() => onPressRemoveItemFromCart(index)}
                          >
                            Remove item
                          </Button>
                        </Grid>
                        <Grid item flexDirection={"row"} sx={{ marginLeft: 2 }}>
                          <h4 className="itemTitle">Base price</h4>
                          <h2>{item.price}</h2>
                        </Grid>
                        <Grid
                          item
                          flexDirection={"row"}
                          sx={{ marginLeft: 2, marginRight: 2 }}
                        >
                          <h4 className="itemTitle">Total price</h4>
                          <h2>{item.defaultQty * item.price}</h2>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </>
              );
            })
          ) : (
            <h1>No item added to cart</h1>
          )}
        </Grid>
      </Container>
    </div>
  );
}
