import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Container,
  makeStyles,
  Paper,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import "./HomePage.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Categories", "Sale"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiButtonBase-root": {
//       fontSize: 11,
//       textTransform: "uppercase",
//       letterSpacing: ".1em",
//       fontWeight: 700,
//       color: "#bdbdbd",
//     },
//   },
// }));

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.productsListArr);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const onPressAddRemoveToCart = (index) => {
    const newArr = [...productList];
    newArr[index].isAddedToCart = false;
    newArr[index].defaultQty = 0;
    dispatch({ type: "ADD_REMOVE_TO_CART", payload: newArr });
  };

  const onPressAddItem = (index) => {
    const newArr = [...productList];
    newArr[index].defaultQty = newArr[index].defaultQty + 1;
    newArr[index].isAddedToCart = true;
    dispatch({ type: "ADD_REMOVE_TO_CART", payload: newArr });
  };

  const onPressRemoveItem = (index) => {
    const newArr = [...productList];
    if (newArr[index].defaultQty !== 0) {
      newArr[index].defaultQty = newArr[index].defaultQty - 1;
      newArr[index].isAddedToCart = true;
      dispatch({ type: "ADD_REMOVE_TO_CART", payload: newArr });
    }
  };

  const redirectToMyCart = () => {
    navigate(`./my-cart`);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderAppBar = () => {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

  return (
    <div>
      <Grid className="header" container>
        <Grid
          md={4}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <h3 className="h3">
            <b>Upgrade</b> to a Fully-fledged <b>SuitUP!</b>
          </h3>
        </Grid>
        <Grid
          md={6}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <h4 className="h3">
            Featuring a additional pages, plugins, beautiful pictures and fully
            functionality!
          </h4>
        </Grid>
        <Grid
          md={2}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="text"
            sx={{
              color: "black",
              backgroundColor: "white",
              borderRadius: 5,
              padding: "12px 24px",
            }}
            onClick={redirectToMyCart}
          >
            <b>My Cart</b>
          </Button>
        </Grid>
      </Grid>
      <Container>
        <Grid
          className="contactDiv"
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid>Order online or call us (1800) 000 8808</Grid>
          <Grid>
            <Button
              sx={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: ".1em",
                fontWeight: 700,
                color: "#bdbdbd",
              }}
              variant="text"
            >
              Search
            </Button>
            <Button
              sx={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: ".1em",
                fontWeight: 700,
                color: "#bdbdbd",
              }}
              variant="text"
            >
              Wishlist
            </Button>
            <Button
              sx={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: ".1em",
                fontWeight: 700,
                color: "#bdbdbd",
              }}
              variant="text"
            >
              USD
            </Button>
          </Grid>
        </Grid>
        <Paper elevation={3}>{renderAppBar()}</Paper>
      </Container>
      <Container maxWidth="lg">
        <Grid sx={{ marginTop: 5 }}>
          <AwesomeSlider>
            <div data-src="https://cdn.shopify.com/s/files/1/0071/6249/5060/files/02_1170x577_crop_top.png?v=1553074822" />
            <div data-src="https://cdn.shopify.com/s/files/1/0071/6249/5060/files/01_1170x577_crop_center.jpg?v=1553074481" />
            <div data-src="https://cdn.shopify.com/s/files/1/0071/6249/5060/files/001_1170x577_crop_center.jpg?v=1553074566" />
          </AwesomeSlider>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent={"center"}
          sx={{
            marginTop: 5,
          }}
        >
          <h1>Products</h1>
        </Grid>
        <Grid container spacing={2} sx={{ marginBottom: 5 }}>
          {productList.map((item, index) => {
            return (
              <>
                <Grid item md={3}>
                  <Paper elevation={2}>
                    <img
                      src={item.imageLink}
                      alt={item.id}
                      height="100%"
                      width="100%"
                    />
                    <Grid
                      container
                      alignItems={"center"}
                      direction={"column"}
                      justifyContent={"center"}
                    >
                      <h3>{`Product ${item.id + 1}`}</h3>
                      <Grid
                        container
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{ marginBottom: 2 }}
                      >
                        <Button
                          variant="outlined"
                          onClick={() => onPressRemoveItem(index)}
                        >
                          -
                        </Button>
                        <Typography
                          variant="h7"
                          sx={{ marginLeft: 1, marginRight: 1 }}
                        >
                          {item.defaultQty}
                        </Typography>
                        <Button
                          variant="outlined"
                          onClick={() => onPressAddItem(index)}
                        >
                          +
                        </Button>
                      </Grid>
                      <Typography variant="h7" sx={{ marginBottom: 2 }}>{`Rs. ${
                        item.defaultQty === 0
                          ? item.price
                          : item.defaultQty * item.price
                      } INR`}</Typography>
                      <Button
                        variant="contained"
                        sx={{ width: "80%", marginBottom: 2 }}
                        onClick={() => onPressAddRemoveToCart(index)}
                        disabled={item.defaultQty === 0}
                      >
                        {item.isAddedToCart
                          ? "Remove from cart"
                          : "Add to cart"}
                      </Button>
                    </Grid>
                  </Paper>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
      <div className={"footer"}>
        <Container>
          <Grid
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <h1 className="footerTitle">Contact Us</h1>
            <Typography className="footerTitle" variant="h5">
              Protonshub Technologies
            </Typography>
            <Typography
              className="footerTitle"
              variant="h7"
              sx={{ marginTop: 1 }}
            >
              606-607, Princess Business Skypark Opposite Orbit Mall,
            </Typography>
            <Typography
              className="footerTitle"
              variant="h7"
              sx={{ marginTop: 1 }}
            >
              AB Rd, Indore, Madhya Pradesh
            </Typography>
            <Typography
              className="footerTitle"
              variant="h7"
              sx={{ marginTop: 1 }}
            >
              452010
            </Typography>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
